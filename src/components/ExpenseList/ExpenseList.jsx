import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import "./ExpenseList.css";

const ExpenseList = ({
  expenses,
  setCurrentExpense,
  deleteExpense,
  setShowExpenses,
}) => {
  return (
    <div className="expenseList">
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id} className="expenseItem">
            <div>
              <p className="expenseTitle">{expense.title}</p>
              <p className="expenseDate">{expense.date}</p>
            </div>
            <div className="iconContainer">
              <p className="expenseCategory">₹{expense.amount}</p>
              <div className="expenseActions">
                <button
                  onClick={() => {
                    setCurrentExpense(expense);
                    setShowExpenses(true);
                  }}
                  className="editButton iconBoxEdit"
                >
                  <CiEdit />
                </button>
                <button
                  onClick={() => deleteExpense(expense.id)}
                  className="deleteButton iconBoxDelete"
                >
                  <TiDeleteOutline />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
