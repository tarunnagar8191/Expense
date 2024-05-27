import { useEffect, useState } from "react";
import "./App.css";
import WalletBalance from "./components/WalletBalance/WalletBalance";
import Expense from "./components/Expense/Expense";
import Chart from "./components/Chart/Chart";
import AddIncomeForm from "./components/AddIncomeForm/AddIncomeForm";
import AddExpenseForm from "./components/AddExpenseForm/AddExpenseForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import TopExpensesChart from "./components/TopExpensesChart/TopExpensesChart";

function App() {
  const [wallet, setWallet] = useState(
    parseInt(localStorage.getItem("Wallet")) || 5000
  );
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) || []
  );
  const [showWallet, setShowWallet] = useState(false);
  const [showExpenses, setShowExpenses] = useState(false);
  const [currentExpense, setCurrentExpense] = useState(null);

  useEffect(() => {
    localStorage.setItem("Wallet", wallet);
  }, [wallet]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addIncome = (amount) => {
    setWallet(wallet + amount);
  };

  const addExpense = (expense) => {
    if (expense.amount > wallet) {
      alert("Insufficient wallet balance!");
      return;
    }
    setExpenses([...expenses, expense]);
    setWallet(wallet - expense.amount);
  };

  const editExpense = (updatedExpense) => {
    const updatedExpenses = expenses.map((exp) =>
      exp.id === updatedExpense.id ? updatedExpense : exp
    );
    setExpenses(updatedExpenses);
    setWallet(
      wallet - updatedExpenses.reduce((total, exp) => total + exp.amount, 0)
    );
    setCurrentExpense(null);
  };

  const deleteExpense = (id) => {
    const remainingExpenses = expenses.filter((exp) => exp.id !== id);
    setExpenses(remainingExpenses);
    setWallet(
      wallet - remainingExpenses.reduce((total, exp) => total + exp.amount, 0)
    );
  };

  return (
    <div className="App">
      <div className="first">
        <h2>Expense Tracker</h2>
        <div className="dataCard expense">
          <WalletBalance
            wallet={wallet}
            setShowWallet={setShowWallet}
            showWallet={showWallet}
          />
          <Expense
            expense={expenses}
            showExpenses={showExpenses}
            setShowExpenses={setShowExpenses}
          />
          <Chart expenses={expenses} />
        </div>
      </div>

      {showWallet && (
        <AddIncomeForm
          addIncome={addIncome}
          showWallet={showWallet}
          setShowWallet={setShowWallet}
        />
      )}

      {showExpenses && (
        <AddExpenseForm
          addExpense={addExpense}
          editExpense={editExpense}
          currentExpense={currentExpense}
          showExpenses={showExpenses}
          setShowExpenses={setShowExpenses}
        />
      )}

      <div className="second">
        <div>
          <h2>Recent Transactions</h2>
          <div className="dataCard recent">
            <ExpenseList
              expenses={expenses}
              setCurrentExpense={setCurrentExpense}
              deleteExpense={deleteExpense}
              setShowExpenses={setShowExpenses}
            />
          </div>
        </div>
        <div>
          <h2>Top Expenses</h2>
          <div className="dataCard top">
            <TopExpensesChart expenses={expenses} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
