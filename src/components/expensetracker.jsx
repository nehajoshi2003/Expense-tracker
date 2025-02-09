import { useState, useEffect } from "react";
import ExpenseForm from "./expenseform";
import ExpenseList from "./expenselist";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);

  // Load saved expenses from local storage
  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(savedExpenses);
  }, []);

  // Save expenses to local storage when they change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="expense-tracker">
      
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
      <h3>Total: Rs{totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default ExpenseTracker;
