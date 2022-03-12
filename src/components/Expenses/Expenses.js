import React, { useState } from "react";

import Card from "../../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  // const INITIAL_STATE = props.items;
  const [filteredYear, setFilteredYear] = useState("2020");
  // const [expenses, setExpenses] = useState(props.items);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // useEffect(() => {
  //   setExpenses(() => {
  //     const nwState = INITIAL_STATE.filter(ele => ele.date.getFullYear().toString() === filteredYear);
  //     return nwState;
  //   })
  // }, [filteredYear, INITIAL_STATE]);

  const filteredExpenses = props.items.filter(
    (ele) => ele.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
