import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Form from './pages/Form'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
