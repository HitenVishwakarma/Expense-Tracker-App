import "./ExpenseItem.css";

export const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <div className="description">
        <h2>{props.title}</h2>
      </div>
      <div className="price">${props.amount}</div>
    </div>
  );
};
