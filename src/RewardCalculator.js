import React, { useState, useEffect } from "react";

const RewardCalculator = () => {
  // Mock transaction data for a customer over a three-month period
  const transactions = [
    { month: "January", amount: 120 },
    { month: "February", amount: 75 },
    { month: "March", amount: 200 },
  ];

  const calculateRewardPoints = (amount) => {
    const pointsOver100 = Math.max(amount - 100, 0) * 2;
    const pointsOver50 = Math.max(Math.min(amount, 100) - 50, 0);
    return pointsOver100 + pointsOver50;
  };

  const calculateTotalRewardPoints = () => {
    let totalPoints = 0;
    for (const transaction of transactions) {
      totalPoints += calculateRewardPoints(transaction.amount);
    }
    return totalPoints;
  };

  useEffect(() => {
    // Simulate an API call to fetch the data (in this case, mock data)
    const fetchData = async () => {
      const totalPoints = calculateTotalRewardPoints();
      console.log(`Total Reward Points: ${totalPoints}`);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Reward Points Calculator</h1>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Amount Spent</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.month}</td>
              <td>${transaction.amount.toFixed(2)}</td>
              <td>{calculateRewardPoints(transaction.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RewardCalculator;
