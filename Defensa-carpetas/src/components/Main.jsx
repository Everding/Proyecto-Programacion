import React from 'react'
import '../Styles/Main.css';
import { Table, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL_PRODUCTOS } from '../Constants/endpoints';
import { EDITAR, VER } from '../Routers/router';
import { Link } from 'react-router-dom'
const Main = () => {

  const [datos, setDatos] = useState([]);

  const getProductos = async () => {
    try {
      const response = await axios.get(URL_PRODUCTOS);
      setDatos(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener los productos", error);
    }
  }

  useEffect(() => {
    getProductos();
  }, []);

  const Borrar = async (id) => {
    try {
      await axios.delete(`${URL_PRODUCTOS}/${id}`);
      getProductos();
    } catch {
      console.error("error al eliminar producto", error);
    }
  }

  return (
    <>
      <h1 className='tituloMain'>Productos</h1>
      <div className='pageContainer'>
        <div className='containerMain'>
          <Link to='/productoNuevo' className='botonCrear' > Crear Producto nuevo </Link>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Categoria</th>
                <th>Sucursal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.nombre}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.stock}</td>
                  <td>{producto.categoria}</td>
                  <td>{producto.sucursal}</td>
                  <td>
                    <Link to={EDITAR.replace(':id', producto.id)} className="btn btn-primary">
                      Editar
                    </Link>
                    <Link to={VER.replace(':id', producto.id)} className="btn btn-danger">
                      Ver
                    </Link>
                    <Button onClick={() => Borrar(producto.id)} className='btn btn-success'>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>


        </div>
        <div className='Explicacion'>
          <h2>¿Para que sirve cada boton?</h2>
          <hr></hr>
          <h3>Crear Producto nuevo</h3>
          <p>Este botón permite añadir un nuevo producto al sistema. Al hacer clic, se abre un formulario donde se deben completar los datos necesarios, como nombre, precio, stock, categoría y sucursal.</p>

          <h3>Editar</h3>
          <p>Este botón permite modificar la información de un producto existente. Al hacer clic, se accede a un formulario donde se pueden actualizar los datos previamente cargados.</p>

          <h3>Ver</h3>
          <p>Este botón permite consultar los detalles completos de un producto. Solo muestra la información registrada, sin posibilidad de modificarla.</p>

          <h3>Eliminar</h3>
          <p>Este botón sirve para borrar un producto de forma permanente del sistema. Una vez eliminado, no se podrá recuperar.</p>

        </div>
      </div>
    </>
  )
}

export default Main