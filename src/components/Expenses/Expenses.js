import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterDataHandler = (selectedYear) => {
    console.log("event in expenses: ", selectedYear);
    setFilteredYear(selectedYear);
    console.log("expense filter data 2: ", filteredYear, selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onChangeFilterData={filterDataHandler} />
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} item={expense} />
      ))}
    </Card>
  );
}

export default Expenses;
