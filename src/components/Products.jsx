import Product from "./Product";
import { useState, useEffect } from "react";
import "./styles/Products.css";

const url = "http://localhost:4000/allProducts";

export default function Products({ output, outputCategory }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const dataDelete = data.slice(1);
          setProducts(dataDelete);

          let filteredData = dataDelete;

          if (outputCategory) {
            filteredData = dataDelete.filter(
              (product) =>
                product.title.toLowerCase().includes(output.toLowerCase()) &&
                product.category.toLowerCase() === outputCategory.toLowerCase()
            );
          }

          setFilteredProducts(filteredData);
        })
        .catch((error) => {
          console.log("ERROR AL BUSCAR LOS DATOS ", error);
        });
    } catch (error) {
      console.log("ERROR AL BUSCAR LOS DATOS ", error);
    }
  }, [output, outputCategory]);

  const handleResetFilter = () => {
    setFilteredProducts(products);
  };

  // useEffect viejo
  // useEffect(() => {
  //   try {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const dataDelete = data.slice(1)
  //         setProducts(dataDelete);
  //         console.log(dataDelete);
  //       })
  //       .catch((error) => {
  //         console.log("ERROR AL BUSCAR LOS DATOS ", error);
  //       });
  //   } catch (error) {
  //     console.log("ERROR AL BUSCAR LOS DATOS ", error);
  //   }
  // }, []);

  return (
    <>
      <h2>Products</h2>
      <div className="containerButton">
        <button onClick={handleResetFilter} className="resetButton">
          {" "}
          Reset Filter{" "}
        </button>
      </div>

      <div className="container-products">
        {filteredProducts.map((product) => {
          return (
            <Product
              key={product._id}
              title={product.title}
              price={product.price}
              image={product.image}
              category={product.category}
              description={product.description}
            />
          );
        })}
      </div>
    </>
  );
}
