import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "40px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast Pizza Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;

  return (
    <footer className="footer">
      {isOpen ? <Order hour={closeHours} openHour={openHours} /> : <p>Iltimos birozdan keyin keling *)</p>}
    </footer>
  );
}

function Order({ hour, openHour }) {
  return (
    <div className="order">
      <p>
        Biz {openHour} dan {hour} gacha ochiq bo'lamiz
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const pizzasNum = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {!!pizzasNum ? (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, consequatur fugiat rem
            accusantium dignissimos a iste amet hic!
          </p>
          <Pizzas pizzas={pizzas} />
        </>
      ) : (
        <p>Uzr saytda tuzatish ishlari olib borilmoqda</p>
      )}
    </main>
  );
}

function Pizzas({ pizzas }) {
  return (
    <ul className={`pizzas`}>
      {pizzas.map((pizza, idx) => (
        <Pizza props={pizza} key={idx} />
      ))}
    </ul>
  );
}

function Pizza({ props }) {
  return (
    <li className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <img src={props.photoName} alt="pizza" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.soldOut ? "Sold Out" : props.price}</span>
      </div>
    </li>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />.
  </React.StrictMode>
);

// React before v18
// ReactDOM.render(<App />, document.getElementById("root"));
