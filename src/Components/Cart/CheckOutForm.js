import React, { useState } from 'react'

function CheckOutForm (props){
const [productodata, setProductosdata] = useState({
    nombre: "",
    email: "",
    telefono: "" 
});

function handleChange(evt){
    const value = evt.target.value;
    const input = evt.target.name;
    const newproductodata = {productodata};
    newproductodata[input] = value;
    setProductosdata (newproductodata); 
}

function clearform(){ 
  setProductosdata({
   nombre: "",
   email: "",
   telefono: "", 
    });
}

function submitData(){
    props.onSubmit(productodata)
}


  return (
    <div>
      <h3>Completa tus datos para finalizar la compra.</h3>
      <div>
        <label>Nombre</label>
        <input 
        value={productodata.nombre}
        name="nombre"
        type={Text}
        onChange={handleChange} />
      </div>
      <div>
        <label>Email</label>
        <input 
        value={productodata.email}
        name="email"
        type={Text}
        required
        onChange={handleChange} />
      </div>
      <div>
        <label>Telefono</label>
        <input 
        value={productodata.telefono}
        name="telefono"
        type={Text}
        required
        onChange={handleChange} />
      </div>
      
     <button disabled={
          !(
            userData.name !== "" &&
            userData.phone !== "" &&
            userData.email !== ""
          )
        }
        onClick={submitData}>Crear orden</button>
        <button onClick={clearform}>Limpiar</button>
     
      </div>
  )
}

export default CheckOutForm;
