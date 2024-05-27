import React from "react";
import "./WalletBalance.css";

const WalletBalance = ({ wallet, setShowWallet, showWallet }) => {
  return (
    <div className="balance">
      <p className="walletBalance">
        Wallet Balance: <span className="walletMoney">₹{wallet}</span>
      </p>
      <button onClick={() => setShowWallet(!showWallet)} className="addName">
        + Add Income
      </button>
    </div>
  );
};

export default WalletBalance;
