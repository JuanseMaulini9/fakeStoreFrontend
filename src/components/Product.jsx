import './styles/Product.css'

export default function Product({ title, price, category, description, image }) {
  return (
    <>
      <div className="container">
        <div className= "container-img">
          <img src={image} alt={title} className/>
        </div>
        <div className="container-info">
          <h2 className='title'>{title}</h2>
          <h3 className='price'>${price}</h3>
          <button className='button'>AGREGAR</button>
        </div>
      </div>
    </>

  )
}