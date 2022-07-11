import "./AddExpense.css";

export const AddExpense = () => {
  return (
    <form>
      <div className="add-expense_controls">
        <div className="add-expense_control">
          <label>Title</label>
          <input type="text"></input>
        </div>
        <div className="add-expense_control">
          <label>Amount</label>
          <input type="number"></input>
        </div>
        <div className="add-expense_control">
          <label>Date</label>
          <input type="date"></input>
        </div>
      </div>
      <div className="add-expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
