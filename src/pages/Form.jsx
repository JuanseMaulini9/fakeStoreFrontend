import "../components/styles/Form.css";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


export default function Form() {

  const navigate = useNavigate()

  const { cart, setCart } = useCartContext();
  
  const [send, setSend] = useState(false)

  const [form, setForm] = useState(
    {
      name: '',
      lastName:'',
      email:'',
      direction:'',
      phoneNumber:'',
      cart
    }
  )  

  function handleSubmit(e){
    e.preventDefault()
    setSend(true)
    setTimeout(()=>{
      navigate('/')
      setSend(false)
    },3000)
    
  }

  function handleChange(e){
    
    const {target} = e
    const {value, name} = target

    const newValues = {
      ...form,
      [name]: value
    }

    setForm(newValues)

    console.log(form)

  }

  return (
    <div className="form-container">
      <div className="form">
        <h2>Tomando orden...</h2>
        <form action="">
          <label className="form-item">
            Nombre: <br></br> <input type="text" name="name" onChange={handleChange}/>
          </label>
          <label className="form-item">
            Apellido:<br></br> <input type="text" name="lastName" onChange={handleChange}/>
          </label>
          <label>
            Email: <br></br>
            <input type="email" name="email" onChange={handleChange}/>
          </label>
          <label className="form-item">
            Direccion: <br></br>
            <input type="text" name="direction" onChange={handleChange}/>
          </label>
          <label className="form-item">
            Telefono: <br></br>
            <input type="tel" name="phoneNumber" onChange={handleChange}/>
          </label>
          {send ? <h2 className="redirigir">Compra realizada con exito, redirijiendo...</h2> : '' }
          <button className="send-button" onClick={handleSubmit}>Enviar</button>
        </form>
      </div>
    </div>
  );
}
