import "../components/styles/CartItem.css";
import { useCartContext } from "../context/CartContext";

export default function CartItem({ image, price, title, id }) {
  const { cart, setCart } = useCartContext();

  function borrar(id) {
    const copy = [...cart];

    const index = copy.findIndex((item) => item.id === id);

    if (index !== -1) {
      copy.splice(index, 1);
    }

    return copy;
  }

  return (
    <div className="cart-item">
      <img src={image} alt={title} className="item-image" />
      <h3 className="item-title">{title}</h3>
      <p className="item-price">${price}</p>
      <button
        className="item-delete"
        onClick={() => {
          setCart(borrar(id));
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </button>
    </div>
  );
}
