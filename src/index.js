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

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numpiza = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numpiza > 0 ? (
        <React.Fragment>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </p>
          <ul className="pizzas">
            {pizzaData.map((val) => (

              <Pizza obj={val} key={val.name} />
              
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We are still working on our menu please come back later</p>
      )}
    </main>
  );
}

function Pizza({ obj }) {
  console.log(obj, "this is the props");

  // if (obj.soldOut) return null;

  return (
    <li className={`pizza ${obj.soldOut?"sold-out":""}`}>
      <img src={obj.photoName} alt="" />
      <div>
        <h3>{obj.name}</h3>
        <p>{obj.ingredients}</p>
      {/* {
        (obj.soldOut)?<span>"SOLD OUT"</span>:
        <span>{obj.price+100}</span>
      } */}


        <span>{obj.soldOut?"Sold out":    obj.price + 100}</span>
      </div>
    </li>
  );
}

function Footer() {
  let hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // console.log( isOpen? alert('we are currently open') :"we are open")

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>we are close now come back again tomorrow at {openHour}</p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div>
      <p> We're open until {closeHour}:00 Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
