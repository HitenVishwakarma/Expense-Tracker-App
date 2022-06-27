import "./ExpenseFilter.css";

export const ExpenseFilter = () => {
  return (
    <div className="ExpenseFilter-container">
      <div className="ExpenseFilter-control">
        <label>Filter by year</label>
        <select name="year">
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};
