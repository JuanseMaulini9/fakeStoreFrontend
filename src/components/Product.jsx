import "./styles/Product.css";
import { useState } from "react";
import Modal from "./Modal";

export default function Product({
  title,
  price,
  category,
  description,
  image,
}) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="container">
        <div className="container-img">
          <img src={image} alt={title} onClick={()=>setModal(!modal)}/>
        </div>
        <div className="container-info">
          <h2 className="title" onClick={() => setModal(!modal)}>
            {title}
          </h2>
          <h3 className="price">${price}</h3>
          <button className="button">AGREGAR</button>
          {modal ? (
            <Modal
              estado={modal}
              setEstado={setModal}
              title={title}
              price={price}
              category={category}
              description={description}
              image={image}
            ></Modal>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
