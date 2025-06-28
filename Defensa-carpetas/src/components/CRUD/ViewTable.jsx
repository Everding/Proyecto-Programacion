import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { URL_PRODUCTOS } from '../../Constants/endpoints';
import { useParams, useNavigate } from 'react-router-dom';
import '../../Styles/View.css'; 

const View = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);

  const getProducto = async () => {
    try {
      const response = await axios.get(`${URL_PRODUCTOS}/${id}`);
      setProducto(response.data);
    } catch (error) {
      console.error("Error al obtener el producto:", error);
    }
  };

  useEffect(() => {
    getProducto();
  }, [id]);

  if (!producto) {
    return <p>Cargando producto...</p>;
  }

 return (
  <div className="pageViewContainer">
    <div className="viewContainer">
      <h2>Detalles del Producto</h2>
      <div className="productoDetalle">
        <p><strong>Nombre:</strong> {producto.nombre}</p>
        <p><strong>Precio:</strong> {producto.precio}</p>
        <p><strong>Stock:</strong> {producto.stock}</p>
        <p><strong>Categoría:</strong> {producto.categoria}</p>
        <p><strong>Sucursal:</strong> {producto.sucursal}</p>
      </div>
      <button className="botonVolver" onClick={() => navigate(-1)}>Volver</button>
    </div>
  </div>
);

}
export default View;
