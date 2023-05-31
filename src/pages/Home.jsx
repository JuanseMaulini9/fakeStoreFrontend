import Products from "../components/Products";
import Sidebar from "../components/Sidebar";
import "../components/styles/Home.css";
import { useState } from "react";

export default function Home(cart, setCart) {
  const [filter, setFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  return (
    <div className="home">
      <Sidebar
        input={filter}
        setInput={setFilter}
        category={categoryFilter}
        setCategory={setCategoryFilter}
      ></Sidebar>
      <Products output={filter} setOutput={setFilter} outputCategory={categoryFilter} setOutputCategory={setCategoryFilter} cart={cart} setCart={setCart}></Products>
    </div>
  );
}
