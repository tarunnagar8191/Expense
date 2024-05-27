import React, { useState, useEffect } from "react";
import "./AddExpenseForm.css";

const AddExpenseForm = ({
  addExpense,
  editExpense,
  currentExpense,
  setShowExpenses,
  showExpenses,
}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (currentExpense) {
      setTitle(currentExpense.title);
      setAmount(currentExpense.amount.toString());
      setCategory(currentExpense.category);
      setDate(currentExpense.date);
    }
  }, [currentExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !title ||
      !amount ||
      !category ||
      !date ||
      isNaN(amount) ||
      amount <= 0
    ) {
      alert("Please fill in all fields with valid data");
      return;
    }

    const expense = {
      id: currentExpense ? currentExpense.id : Date.now(),
      title,
      amount: parseInt(amount),
      category,
      date,
    };

    if (currentExpense) {
      editExpense(expense);
    } else {
      addExpense(expense);
    }

    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
    setShowExpenses(false);
  };

  return (
    <div
      id="default-modal"
      aria-hidden="true"
      className={`modal ${showExpenses ? "" : "hidden"}`}
    >
      <div className="modal-container">
        <div className="modal-content">
          <form className="addExpenseForm" onSubmit={handleSubmit}>
            <h1>{currentExpense ? "Edit Expense" : "Add Expense"}</h1>
            <div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Expense Title"
              />
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
              />
            </div>
            <div>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
              />
              <input
                type="date"
                className="dateInput"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="buttonContainer">
              <button type="submit">
                {currentExpense ? "Save Changes" : "Add Expense"}
              </button>
              <button
                id="cancel"
                type="button"
                onClick={() => setShowExpenses(false)}
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

export default AddExpenseForm;
