import "./styles/Categories.css";
export default function Categories({ input, setInput }) {
  
  
  const handleClick = (value) => {
    setInput(value);
    console.log(value)
  };

  return (
    <>
      <h3 className="title-category">CATEGORIES</h3>
      <ul className="category-list">
        <li
          className="category-item"
          onClick={() => handleClick("electronics")}
        >
          electronics
        </li>
        <li className="category-item" onClick={() => handleClick("jewelery")}>
          jewelery
        </li>
        <li
          className="category-item"
          onClick={() => handleClick(`men's clothing`)}
        >
          men's clothing
        </li>
        <li
          className="category-item"
          onClick={() => handleClick(`women's clothing`)}
        >
          women's clothing
        </li>
      </ul>
    </>
  );
}
