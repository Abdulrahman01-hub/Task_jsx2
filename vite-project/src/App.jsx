import { pizzas } from './data';
import './App.css';

function App() {
  return (
    <>
      <div>
        <h1>Pizza Elanlari</h1>
      </div>

      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="pizza-card">
            <img src={pizza.img} alt={pizza.name} />
            <h3>{pizza.name}</h3>
            <p>{pizza.dsc}</p>
            <p><strong>${pizza.price}</strong></p>
            <p>Rating: {pizza.rate} stars</p>
            <p>Location: {pizza.country}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;