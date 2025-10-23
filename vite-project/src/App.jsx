import { useState } from "react";
import "./App.css";

function App() {
  const [dice1, setDice1] = useState("-");
  const [dice2, setDice2] = useState("-");

  const rollDice = () => {
    const random1 = Math.floor(Math.random() * 6) + 1;
    const random2 = Math.floor(Math.random() * 6) + 1;
    setDice1(random1);
    setDice2(random2);
  };

  return (
    <div className="container">
      <h1>🎲 Kisi Nerdi</h1>

      <div className="dice-box">
        <div className="dice">{dice1}</div>
        <div className="dice">{dice2}</div>
      </div>

      <button onClick={rollDice}>zeri at blleee</button>
    </div>
  );
}

export default App;


