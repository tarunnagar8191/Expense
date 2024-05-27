import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ expenses }) => {
  const expenseCategories = expenses?.reduce((acc, expense) => {
    if (acc[expense.category]) {
      acc[expense.category] += expense.amount;
    } else {
      acc[expense.category] = expense.amount;
    }
    return acc;
  }, {});

  const data = {
    labels: Object.keys(expenseCategories),
    datasets: [
      {
        label: "Expenses",
        data: Object.values(expenseCategories),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)",
          "rgb(25, 159, 64)",
          "rgb(55, 159, 64)",
          "rgb(255, 59, 64)",
          "rgb(255, 159, 164)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 0,
          padding: 0,
          font: {
            size: 0,
          },
        },
      },
    },
  };

  return (
    <div className="chart">
      <Pie data={data} options={options} />
    </div>
  );
};

export default Chart;
