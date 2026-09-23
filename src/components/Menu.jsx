import { useState } from "react";
import Pizza from "./Pizza";
const pizzaData = [
  {
    id: 1,
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    id: 2,
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    id: 3,
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    id: 4,
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    id: 5,
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    id: 6,
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function Menu() {
  const [menu, setMenu] = useState(pizzaData);
  function handleDelete(id) {
    setMenu((prevMenu) => {
      return prevMenu.filter((x) => {
        return x.id !== id;
      });
    });
  }
  const numPizza = menu.length;
  function handleSort() {
    setMenu((prevMenu) => [...prevMenu].sort((a, b) => a.price - b.price));
  }

  return (
    <menu className="menu">
      <h2>Menu</h2>
      <p>Delicious Pizza</p>
      {numPizza > 0 ? (
        <ul className="pizzas">
          {menu.map((pizz) => {
            return <Pizza pizz={pizz} key={pizz.id} onDelete={handleDelete} />;
          })}
        </ul>
      ) : (
        <p>there is no available pizza</p>
      )}
      <button className="btn" onClick={handleSort}>
        Sort
      </button>
    </menu>
  );
}
export default Menu;
