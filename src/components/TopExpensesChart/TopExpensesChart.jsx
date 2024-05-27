import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./TopExpensesChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TopExpensesChart = ({ expenses }) => {
  const topExpenses = [...expenses]
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5);

  const data = {
    labels: topExpenses.map((expense) => expense.title),
    datasets: [
      {
        label: "Top Expenses",
        data: topExpenses.map((expense) => expense.amount),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="topExpensesChart">
      <Line data={data} />
    </div>
  );
};

export default TopExpensesChart;
