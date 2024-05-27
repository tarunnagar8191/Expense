import React, { useState } from "react";
import "./AddIncomeForm.css";

const AddIncomeForm = ({ addIncome, showWallet, setShowWallet }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    addIncome(parseInt(amount));
    setAmount("");
    setShowWallet(false);
  };

  return (
    <div
      id="default-modal"
      aria-hidden="true"
      className={`modal ${showWallet ? "" : "hidden"}`}
    >
      <div className="modal-container">
        <div className="modal-content">
          <form className="addIncomeForm" onSubmit={handleSubmit}>
            <h1>Add Balance</h1>
            <div className="formDiv">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Add Income"
              />
              <button type="submit">Add</button>
              <button
                id="cancel"
                type="button"
                onClick={() => setShowWallet(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddIncomeForm;
