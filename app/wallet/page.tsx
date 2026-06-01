"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import MobileNav from "../../components/MobileNav";
import { connectWallet } from "../../lib/wallet";

export default function WalletPage() {
  const [wallet, setWallet] = useState("");

  const handleConnect = async () => {
    const result = await connectWallet();
    setWallet(result.address);
  };

  return (
    <>
      <Navbar />

      <main style={{ padding: "20px", paddingBottom: "80px" }}>
        <h1>Wallet</h1>

        <button onClick={handleConnect}>
          Connect Wallet
        </button>

        {wallet && (
          <p style={{ marginTop: "20px" }}>
            Connected: {wallet}
          </p>
        )}
      </main>

      <MobileNav />
    </>
  );
}
