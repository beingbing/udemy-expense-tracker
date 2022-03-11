import React, { useState } from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem({ item }) {

  const [title, setTitle] = useState(item.title);

  const clickHandler = () => {
      setTitle('updated!!');
      console.log("clicked!!");
    }
  
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={item.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${item.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;

// state: changes to these variables should initiate a re-rendering
// that's how they are different from normal variables

// react schedules state updates, it doesn't perform them instantly.
