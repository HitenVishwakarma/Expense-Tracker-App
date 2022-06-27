import "./ExpenseItem.css";

export const ExpenseItem = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-item">
      <div className="expense_date">
        <div className="expense_date-month">{month}</div>
        <div className="expense_date-year">{year}</div>
        <div className="expense_date-day">{day}</div>
      </div>
      <div className="description">
        <h2>{props.title}</h2>
      </div>
      <div className="price">${props.amount}</div>
    </div>
  );
};
