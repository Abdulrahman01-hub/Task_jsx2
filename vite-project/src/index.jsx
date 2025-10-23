import React from 'react';
import { pizzas } from './data';
import './App.css';
const PizzaList = () => {
    return (
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
    );
};

const App = () => {
    return (
        <div className="App">
            <div className="navbar">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
            <h1>Pizza elanlari</h1>
            <PizzaList />
            <footer>
                <p>2025 © Pizza Shop</p>
            </footer>
        </div>
    );
};

export default App;