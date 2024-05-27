import React from "react";
import "./Expense.css";

const Expense = ({ expense, showExpenses, setShowExpenses }) => {
  return (
    <div className="expenseDiv">
      <p className="walletBalance">
        Expenses: <span className="walletExpense"></span>
      </p>
      <button
        onClick={() => setShowExpenses(!showExpenses)}
        className="addExpense"
      >
        + Add Expense
      </button>
    </div>
  );
};

export default Expense;
