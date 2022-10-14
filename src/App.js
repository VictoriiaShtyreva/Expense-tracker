import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {title: 'Car Insurance', amount: 250, date: new Date(2021, 3,15)},
    {title: 'Store', amount: 50, date: new Date(2021, 3,25)},
    {title: 'Shopping', amount: 450, date: new Date(2021, 5,10)},
  ];
  return (
    <div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
