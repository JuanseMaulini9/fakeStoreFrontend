import { useCartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import "../components/styles/Cart.css";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, setCart } = useCartContext();

  const navigate = useNavigate()

  return (
    <div className="cart">
      {console.log(cart)}

      <div className="cart-container">
        {cart.length
          ? cart.map((item) => (
              <CartItem
                title={item.title}
                image={item.image}
                price={item.price}
                key={item.id}
                id={item.id}
              ></CartItem>
            ))
          : <h2 className="void-cart">Tu carrito esta vacio</h2>}
      </div>

      <button className="done" onClick={()=>navigate('/form')}>pedido listo</button>
      
    </div>
  );
}
