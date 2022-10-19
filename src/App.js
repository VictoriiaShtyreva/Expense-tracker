import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {id:'1' , title: 'Car Insurance', amount: 250, date: new Date(2021, 3,15)},
    {id:'2' , title: 'Pharmacy', amount: 50, date: new Date(2021, 3,25)},
    {id:'3' , title: 'Shopping', amount: 450, date: new Date(2021, 5,10)},
    {id:'4' , title: 'Book', amount: 48, date: new Date(2021, 8,14)},
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpenseHandler={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
