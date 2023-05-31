import "./styles/Modal.css";
import "./styles/Product.css";
import { useCartContext } from "../context/CartContext";

export default function Modal({
  estado,
  setEstado,
  title,
  price,
  category,
  description,
  image,
}) {

  const { cart, setCart } = useCartContext();


  return (
    <>
      {estado && (
        <div className="modal">
          <div className="modal-container">
            <div className="modal-container-image">
              <img src={image} alt={title} />
            </div>
              <div className="modal-container-info">
                <h2 className="modal-container-info-title">{title}</h2>
                <h3 className="modal-container-info-price">$ {price}</h3>
                <p className="modal-container-info-category">category: <span className="modal-container-info-categoryType">{category}</span> </p>
                <p className="modal-container-info-description">{description}</p>
                <button className="button" onClick={()=>setCart([...cart, {title, price, image}])}>AGREGAR</button>
              </div>
            <button className="close" onClick={() => setEstado(false)}>
              X
            </button>
            </div>            
          </div>
      )}
    </>
  );
}
