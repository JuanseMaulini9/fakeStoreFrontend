import Product from "./Product";
import { useState, useEffect } from "react";
import "./styles/Products.css"

const url = "http://localhost:4000/allProducts";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const dataDelete = data.slice(1)
          setProducts(dataDelete);
          console.log(dataDelete);
        })
        .catch((error) => {
          console.log("ERROR AL BUSCAR LOS DATOS ", error);
        });
    } catch (error) {
      console.log("ERROR AL BUSCAR LOS DATOS ", error);
    }
  }, []);

  return (
    <>
      <h2>Products</h2>
      <div className="container-products">
        {products.map((product) => {
        return (
          <Product
            key={product._id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        );
      })}
      </div>
      
    </>
  );
}
