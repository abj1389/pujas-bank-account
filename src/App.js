import './App.css';
import React from 'react';
import BankAccount from './components/BankAccount/BankAccount';
import Bidder from './components/Bidder/Bidder';

function App() {

  const [bidList, setBidList] = React.useState([100]);

  const addBid = () => {
    const newBidList = [...bidList, (bidList[bidList.length-1] + 5)];
    setBidList(newBidList);
  }

  return (
    <div className="app">
      <h2>Cuenta bancaria:</h2>
      <BankAccount></BankAccount>
      <h2>Pujas:</h2>
      <ul>
        {bidList.map(bid => <li key={bid}>{bid}€</li>)}
      </ul>
      <h2>Pujadores:</h2>
      <Bidder addBid={addBid} name="Pedro"></Bidder>
      <Bidder addBid={addBid} name="Gonzalo"></Bidder>
      <Bidder addBid={addBid} name="Edu"></Bidder>
    </div>
  );
}

export default App;