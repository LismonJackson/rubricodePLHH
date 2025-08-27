import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { AlertCircle, Loader2 } from "lucide-react";
import { useWallet } from "@suiet/wallet-kit";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PACKAGE_ID = process.env.NEXT_PUBLIC_PACKAGE_ID!;
const STAKE_POOL_ID = process.env.NEXT_PUBLIC_STAKE_POOL_ID!;
const PLHH_TYPE = `${PACKAGE_ID}::plhh::PLHH`;

interface WalletType {
  connected: boolean;
  address?: string;
  getClient?: () => SuiClient;
  signAndExecuteTransactionBlock: (params: {
    transactionBlock: TransactionBlock;
    options?: { showEffects?: boolean; showEvents?: boolean };
  }) => Promise<any>;
}

const StakingInterface: React.FC = () => {
  const wallet = useWallet() as unknown as WalletType;
  const sectionRef = useRef(null);
  const isViewport = useInView(sectionRef, { amount: 0.5, once: false });

  const [isInView, setIsInView] = useState(false);
  const [stakingDuration, setStakingDuration] = useState(1);
  const [stakingAmount, setStakingAmount] = useState(0.88);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [plhhBalance, setPlhhBalance] = useState("0");

  // APY = 11% * years, capped at 77%
  const apyPercent = Math.min(stakingDuration, 7) * 11;
  const expectedReward = (stakingAmount * apyPercent) / 100;

  useEffect(() => {
    setIsInView(isViewport);
  }, [isViewport]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (wallet.connected && wallet.address) {
      loadUserData();
    }
  }, [wallet.connected, wallet.address]);

  const loadUserData = async () => {
    if (!wallet.connected || !wallet.address) return;

    try {
      const provider = wallet.getClient
        ? wallet.getClient()
        : new SuiClient({ url: getFullnodeUrl("mainnet") });

      // Get PLHH balance
      const coinType = PLHH_TYPE;
      const coinsResponse = await provider.getCoins({ owner: wallet.address, coinType });
      let total = BigInt(0);
      for (const c of coinsResponse.data || []) total += BigInt(c.balance);
      setPlhhBalance((Number(total) / 1e9).toFixed(4));

      // Try to get stakes - this is optional and might need adjustment based on your contract structure
      try {
        const tx = new TransactionBlock();
        tx.moveCall({
          target: `${PACKAGE_ID}::plhh::get_stakes`,
          arguments: [
            tx.object(STAKE_POOL_ID),
            tx.pure(wallet.address)
          ]
        });
        
        const result = await provider.devInspectTransactionBlock({
          transactionBlock: tx,
          sender: wallet.address
        });
        
        // Look for emitted events that might contain stake information
        console.log("Stakes inspect result:", result);
        
        // For simplicity, we'll just check if there are any returned values
        if (result.events && result.events.length > 0) {
          const stakeEvents = result.events.filter(
            e => e.type.includes("InfoEvent")
          );
          
          if (stakeEvents.length > 0) {
            // You can parse returned events here to display active stakes
          }
        }
      } catch (e) {
        console.warn("Could not retrieve stakes:", e);
      }
    } catch (e) {
      console.error("Error loading user data:", e);
      toast.error("Failed to load your staking data");
    }
  };

  const handleApproveContract = () => {
    if (!wallet.connected) {
      toast.error("Please connect your wallet first");
      return;
    }
    if (stakingAmount <= 0) {
      toast.error("Please enter an amount to stake");
      return;
    }
    if (Number(plhhBalance) < stakingAmount) {
      toast.error(`Insufficient PLHH balance. You have ${plhhBalance} PLHH`);
      return;
    }
    setShowConfirmation(true);
  };

  const handleConfirmStaking = async () => {
    if (!wallet.connected || !wallet.address) {
      toast.error("Please connect your wallet first");
      return;
    }
    setIsProcessing(true);

    try {
      const provider = wallet.getClient
        ? wallet.getClient()
        : new SuiClient({ url: getFullnodeUrl("mainnet") });

      // Convert to atomic units
      const amountAtomic = Math.round(stakingAmount * 1e9);

      // Fetch all PLHH coins
      const coinsResponse = await provider.getCoins({
        owner: wallet.address,
        coinType: PLHH_TYPE,
      });
      const coins = coinsResponse.data || [];
      if (!coins.length) {
        throw new Error("No PLHH tokens in your wallet");
      }

      // Sort coins by balance (largest first)
      coins.sort((a, b) => Number(b.balance) - Number(a.balance));
      
      // Check total available balance
      let totalAvailable = 0;
      for (const coin of coins) {
        totalAvailable += Number(coin.balance);
      }
      
      if (totalAvailable < amountAtomic) {
        throw new Error(`Insufficient balance: you have ${totalAvailable/1e9} PLHH, need ${amountAtomic/1e9} PLHH`);
      }
      
      // Create transaction
      const tx = new TransactionBlock();
      tx.setSender(wallet.address!);
      tx.setGasBudget(100_000_000);
      
      // Check if largest coin has enough balance
      let stakeableCoin;
      
      if (Number(coins[0].balance) >= amountAtomic) {
        // Use largest coin directly
        stakeableCoin = tx.object(coins[0].coinObjectId);
        console.log(`Using coin ${coins[0].coinObjectId} with balance ${Number(coins[0].balance)/1e9} PLHH`);
      } else {
        // Create a new merged coin
        console.log(`Need to merge coins. Largest coin has ${Number(coins[0].balance)/1e9} PLHH, need ${amountAtomic/1e9} PLHH`);
        
        // Create a new coin by merging the required amount
        let mergedCoin = tx.object(coins[0].coinObjectId);
        let currentTotal = Number(coins[0].balance);
        
        for (let i = 1; i < coins.length && currentTotal < amountAtomic; i++) {
          console.log(`Merging coin ${coins[i].coinObjectId} with balance ${Number(coins[i].balance)/1e9} PLHH`);
          tx.mergeCoins(mergedCoin, [tx.object(coins[i].coinObjectId)]);
          currentTotal += Number(coins[i].balance);
        }
        
        stakeableCoin = mergedCoin;
        console.log(`Created merged coin with total balance ${currentTotal/1e9} PLHH`);
      }
      
      // DEBUG: First try getting token info before staking
      console.log("Getting stake pool info...");
      
      // Now call the stake function
      tx.moveCall({
        target: `${PACKAGE_ID}::plhh::stake`,
        arguments: [
          tx.object(STAKE_POOL_ID),  // stake pool
          tx.pure(amountAtomic),     // amount to stake
          tx.pure(stakingDuration),  // duration in years
          stakeableCoin,             // coin to use
        ],
      });

      console.log("Transaction details:", {
        packageId: PACKAGE_ID,
        stakePoolId: STAKE_POOL_ID,
        stakeAmount: amountAtomic / 1e9,
        stakingDuration,
      });

      const result = await wallet.signAndExecuteTransactionBlock({
        transactionBlock: tx,
        options: {
          showEffects: true,
          showEvents: true,
        }
      });

      console.log("Staking result:", result);
      
      if (result && result.effects && result.effects.status && result.effects.status.status === "success") {
        toast.success("Staking successful!");
        loadUserData();
      } else {
        // Get detailed error information
        let errorMsg = "Unknown error";
        
        if (result?.effects?.status?.error) {
          errorMsg = result.effects.status.error;
        } else if (result?.effects) {
          try {
            errorMsg = JSON.stringify(result.effects);
          } catch (e) {
            errorMsg = "Error parsing transaction result";
          }
        }
        
        console.error("Full staking result:", result);
        toast.error("Staking failed: " + errorMsg);
      }
    } catch (e: any) {
      console.error("Staking error:", e);
      const errMsg = e instanceof Error ? e.message : "Transaction failed";
      toast.error(`Staking failed: ${errMsg}`);
    } finally {
      setIsProcessing(false);
      setShowConfirmation(false);
    }
  };

  const handleCancelStaking = () => {
    setShowConfirmation(false);
  };

  const SectionWrapper = isMobile ? "section" : motion.section;
  const sectionProps = isMobile
    ? {}
    : {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
        transition: { duration: 0.8 },
      };

  const content = (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Main Form Container */}
      <div className="backdrop-blur-md p-8 rounded-2xl bg-black/60 border border-[#FFD700]/20 shadow-2xl"
           style={{
             boxShadow: "0 0 50px rgba(255,215,0,0.1), 0 20px 40px rgba(0,0,0,0.5)",
           }}>
        
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3"
            style={{
              background: "linear-gradient(135deg, #FFD700 0%, #FFE55C 50%, #FFD700 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 40px rgba(255,215,0,0.5)",
              filter: "drop-shadow(0 4px 20px rgba(255,215,0,0.3))",
            }}>
          Stake Your Tokens
        </h2>
        <p className="text-white/70 mb-8 text-lg">Choose duration and amount to start earning rewards</p>

        {/* Balance Display */}
        <div className="mb-8 p-4 rounded-lg border border-[#FFD700]/30"
             style={{
               background: "linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,215,0,0.05))",
             }}>
          <p className="text-lg">
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Your PLHH Balance: </span>
            <span style={{
              color: "#FFD700",
              fontWeight: 700,
              fontSize: "1.25rem",
              textShadow: "0 0 20px rgba(255,215,0,0.5)",
            }}>
              {plhhBalance} PLHH
            </span>
          </p>
        </div>

        {/* Staking Duration Slider */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl md:text-2xl font-semibold"
                style={{
                  color: "#FFD700",
                  textShadow: "0 0 25px rgba(255,215,0,0.4)",
                }}>
              Staking Duration
            </h3>
            <span className="text-xl font-bold px-4 py-2 rounded-lg"
                  style={{
                    background: "rgba(255,215,0,0.1)",
                    border: "1px solid rgba(255,215,0,0.3)",
                    color: "#FFD700",
                    textShadow: "0 0 15px rgba(255,215,0,0.5)",
                  }}>
              {stakingDuration} {stakingDuration === 1 ? 'Year' : 'Years'} ({apyPercent}% APY)
            </span>
          </div>
          <Slider 
            defaultValue={[stakingDuration]} 
            min={1} 
            max={8} 
            step={1} 
            onValueChange={v => setStakingDuration(v[0])}
            className="[&_[role=slider]]:bg-[#FFD700] [&_[role=slider]]:border-[#FFD700] [&_.range]:bg-[#FFD700]"
          />
        </div>

        {/* Amount to Stake Slider */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl md:text-2xl font-semibold"
                style={{
                  color: "#FFD700",
                  textShadow: "0 0 25px rgba(255,215,0,0.4)",
                }}>
              Amount to Stake
            </h3>
            <span className="text-xl font-bold px-4 py-2 rounded-lg"
                  style={{
                    background: "rgba(255,215,0,0.1)",
                    border: "1px solid rgba(255,215,0,0.3)",
                    color: "#FFD700",
                    textShadow: "0 0 15px rgba(255,215,0,0.5)",
                  }}>
              {stakingAmount.toFixed(2)} PLHH
            </span>
          </div>
          <Slider 
            defaultValue={[stakingAmount]} 
            min={0.1} 
            max={10} 
            step={0.01} 
            onValueChange={v => setStakingAmount(v[0])}
            className="[&_[role=slider]]:bg-[#FFD700] [&_[role=slider]]:border-[#FFD700] [&_.range]:bg-[#FFD700]"
          />
          <div className="mt-3 flex justify-end">
            <button 
              onClick={() => setStakingAmount(Number(plhhBalance))} 
              className="text-sm font-semibold px-3 py-1 rounded transition-all duration-300"
              style={{
                color: "#FFD700",
                border: "1px solid rgba(255,215,0,0.3)",
                background: "rgba(255,215,0,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,215,0,0.2)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(255,215,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,215,0,0.05)";
                e.currentTarget.style.boxShadow = "none";
              }}>
              MAX
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="space-y-4 mb-8 p-6 rounded-lg"
             style={{
               background: "rgba(0,0,0,0.3)",
               border: "1px solid rgba(255,215,0,0.2)",
             }}>
          <div className="flex justify-between text-lg">
            <span style={{ color: "rgba(255,255,255,0.8)" }}>APY Rate</span>
            <span style={{
              color: "#FFD700",
              fontWeight: 700,
              textShadow: "0 0 15px rgba(255,215,0,0.4)",
            }}>
              {apyPercent}%
            </span>
          </div>
          <div className="flex justify-between text-lg">
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Expected Rewards</span>
            <span style={{
              color: "#FFD700",
              fontWeight: 700,
              textShadow: "0 0 15px rgba(255,215,0,0.4)",
            }}>
              +{expectedReward.toFixed(2)} PLHH
            </span>
          </div>
          <div className="flex justify-between text-lg">
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Lock Period</span>
            <span style={{
              color: "#FFD700",
              fontWeight: 700,
              textShadow: "0 0 15px rgba(255,215,0,0.4)",
            }}>
              {stakingDuration} {stakingDuration===1?'Year':'Years'}
            </span>
          </div>
        </div>

        {/* Stake Button */}
        <Button 
          onClick={handleApproveContract} 
          disabled={!wallet.connected} 
          className="w-full h-14 text-lg font-bold transition-all duration-300"
          style={{
            background: wallet.connected 
              ? "linear-gradient(135deg, #FFD700, #FFA500)" 
              : "linear-gradient(135deg, #666, #444)",
            color: wallet.connected ? "#000" : "#999",
            border: "2px solid transparent",
            boxShadow: wallet.connected 
              ? "0 0 30px rgba(255,215,0,0.4), 0 10px 20px rgba(0,0,0,0.3)" 
              : "none",
          }}
          onMouseEnter={(e) => {
            if (wallet.connected) {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 0 40px rgba(255,215,0,0.6), 0 15px 30px rgba(0,0,0,0.4)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = wallet.connected 
              ? "0 0 30px rgba(255,215,0,0.4), 0 10px 20px rgba(0,0,0,0.3)" 
              : "none";
          }}>
          {wallet.connected ? 'STAKE NOW' : 'Connect Wallet to Stake'}
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <ToastContainer position="top-right" theme="dark" />
      <div ref={sectionRef} className="h-[150vh] w-full relative z-10" />
      <AnimatePresence>
        {isMobile ? (
          <SectionWrapper className="relative top-0 left-0 z-30 w-full min-h-screen overflow-y-auto py-10 flex items-center justify-center">{content}</SectionWrapper>
        ) : (
          isInView && <SectionWrapper {...sectionProps} className="fixed top-0 left-0 z-30 w-full min-h-screen overflow-y-auto py-10 flex items-center justify-center">{content}</SectionWrapper>
        )}
      </AnimatePresence>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-md w-full"
          >
            <div className="rounded-2xl shadow-2xl overflow-hidden"
                 style={{
                   background: "linear-gradient(135deg, rgba(0,0,0,0.95), rgba(33,33,33,0.95))",
                   border: "2px solid rgba(255,215,0,0.3)",
                   boxShadow: "0 0 50px rgba(255,215,0,0.2), 0 20px 40px rgba(0,0,0,0.5)",
                 }}>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-center mb-4"
                    style={{
                      background: "linear-gradient(135deg, #FFD700, #FFE55C)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 2px 10px rgba(255,215,0,0.3))",
                    }}>
                  Confirm Staking
                </h3>
                
                <p className="text-center text-white/80 mb-8 text-lg">
                  You are about to stake{" "}
                  <span style={{ color: "#FFD700", fontWeight: 700 }}>{stakingAmount.toFixed(2)} PLHH</span>
                  {" "}for{" "}
                  <span style={{ color: "#FFD700", fontWeight: 700 }}>{stakingDuration} {stakingDuration===1?'year':'years'}</span>
                </p>
                
                <div className="space-y-4 mb-8 p-4 rounded-lg"
                     style={{ background: "rgba(255,215,0,0.05)", border: "1px solid rgba(255,215,0,0.2)" }}>
                  <div className="flex justify-between">
                    <span style={{ color: "rgba(255,255,255,0.8)" }}>APY Rate</span>
                    <span style={{ color: "#FFD700", fontWeight: 700 }}>{apyPercent}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "rgba(255,255,255,0.8)" }}>Expected Rewards</span>
                    <span style={{ color: "#FFD700", fontWeight: 700 }}>+{expectedReward.toFixed(2)} PLHH</span>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg flex items-start mb-8"
                     style={{ background: "rgba(255,0,0,0.1)", border: "1px solid rgba(255,0,0,0.3)" }}>
                  <AlertCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }}/>
                  <p className="text-sm" style={{ color: "#ff6b6b" }}>
                    Early withdrawal will incur penalties ranging from 20-40% of rewards depending on how early you withdraw.
                  </p>
                </div>
                
                <div className="flex gap-4 justify-center">
                  <Button 
                    onClick={handleCancelStaking} 
                    variant="outline" 
                    className="flex-1 h-12 font-semibold"
                    style={{
                      background: "transparent",
                      color: "#FFD700",
                      border: "2px solid rgba(255,215,0,0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255,215,0,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}>
                    Cancel
                  </Button>
                  
                  <Button 
                    onClick={handleConfirmStaking} 
                    disabled={isProcessing} 
                    className="flex-1 h-12 font-semibold flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #FFD700, #FFA500)",
                      color: "#000",
                    }}>
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                        Processing...
                      </>
                    ) : (
                      "Confirm Staking"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default StakingInterface;