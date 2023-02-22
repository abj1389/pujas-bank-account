import React from "react";
import "./BankAccount.css";

const BankAccount = () => {
  const [account, setAccount] = React.useState({
    name: "Alex",
    savings: 5000,
    founds: 1000,
  });

  const takeMoney = () => {
    const newAccount = {
        ...account,
        savings: account.savings - 50
    };
    setAccount(newAccount);
  }

  const addMoney = () => {
    const newAccount = {
      ...account,
      savings: account.savings + 100,
    }
    setAccount(newAccount);
  }

  const addMoneyToFounds = () => {
    const newAccount = {
      ...account,
      savings: account.savings - 1000,
      founds: account.founds + 1000,
    }
    setAccount(newAccount);
  }

  return (
    <>
      <p>El titular de la cuenta es: {account.name}</p>
      <p>El saldo de la cuenta de ahorros es: {account.savings}€</p>
      <p>El total del fondo de inversión es: {account.founds}€</p>

      <button className="ba__button" onClick={(account.savings >= 50 ? takeMoney : () => alert("Amigo... aún no has ahorrado 50€"))}>Retirar 50€</button>
      <button className="ba__button" onClick={addMoney}>Ingresar 100€</button>
      <button className="ba__button" onClick={(account.savings >= 1000 ? addMoneyToFounds : () => alert("Primero tienes que ahorrar al menos 1000€"))}>Meter en fondos 1000€</button>
    </>
  );
}

export default BankAccount;