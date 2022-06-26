import { ExpenseItem } from "../Expenses/ExpenseItem";
import "./Home.css";

export const Home = () => {
  const item = [
    {
      id: 1,
      title: "New Car",
      amount: 2300,
      date: new Date(2023, 5, 24),
    },
    {
      id: 2,
      title: "New House",
      amount: 8000,
      date: new Date(2023, 5, 1),
    },
    {
      id: 3,
      title: "New Car",
      amount: 4300,
      date: new Date(2023, 5, 24),
    },
  ];
  return (
    <div>
      <h1>Expense Tracker App !</h1>
      <div className="main-container">
        {item.map((data) => (
          <ExpenseItem title={data.title} amount={data.amount} />
        ))}
      </div>
    </div>
  );
};
