import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onChangeFilterData={filterChangeHandler} />
      {props.expenses.map((expense) => (
        <ExpenseItem key={expense.id} item={expense} />
      ))}
    </Card>
  );
};

export default Expenses;
