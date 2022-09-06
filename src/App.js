import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  //closer look at JSX 
  // ..in backend of JSX
  // > import React from react in all file where JSX used
  // > return React.createElement()
  //

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Let's Get Started"),
  //   React.createElement(Expenses, {items: expenses})
  // );

  const addExpenseHandler = expanse => {
    // setExpenses([expanse, ...expenses]);
    setExpenses( prevExpenses => {
      return [expanse, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
