const ExpenseList = ({ expenses, onDeleteExpense }) => {
    return (
      <ul className="expense-list">
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>{expense.description}</span>
            <span>Rs{expense.amount}</span>
            <span>{expense.date}</span>
            <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default ExpenseList;
  