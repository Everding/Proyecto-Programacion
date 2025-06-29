import React, { useEffect, useState } from 'react';
import '../Styles/Main.css';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { URL_PRODUCTOS } from '../Constants/endpoints';
import { EDITAR, VER } from '../Routers/router';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Main = () => {
  const usuario = localStorage.getItem("usuarioLogueado");
  const [datos, setDatos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 8;

  const getProductos = async () => {
    try {
      const response = await axios.get(URL_PRODUCTOS);
      setDatos(response.data);
    } catch (error) {
      console.error("Error al obtener los productos", error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  const Borrar = async (id) => {
    try {
      await axios.delete(`${URL_PRODUCTOS}/${id}`);
      getProductos();
    } catch (error) {
      console.error("error al eliminar producto", error);
    }
  };

  // Calcular los productos que se mostrarán en la página actual
  const indexUltimoProducto = paginaActual * productosPorPagina;
  const indexPrimerProducto = indexUltimoProducto - productosPorPagina;
  const productosPaginados = datos.slice(indexPrimerProducto, indexUltimoProducto);

  // Calcular total de páginas
  const totalPaginas = Math.ceil(datos.length / productosPorPagina);

  // Funciones para cambiar página
  const paginaAnterior = () => {
    setPaginaActual((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const paginaSiguiente = () => {
    setPaginaActual((prev) => (prev < totalPaginas ? prev + 1 : prev));
  };

  return (
    <>
      <h1 className='tituloMain'>Productos</h1>
      <div className='pageContainer'>
        <div className='containerMain'>
          {usuario && (
            <Link to='/productoNuevo' className='botonCrear' > Crear Producto nuevo </Link>
          )}
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
              {productosPaginados.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.nombre}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.stock}</td>
                  <td>{producto.categoria}</td>
                  <td>{producto.sucursal}</td>
                  <td>
                    {usuario && (
                      <>
                        <Link to={EDITAR.replace(':id', producto.id)} className="btn btn-primary">Editar</Link>
                        <Link to={VER.replace(':id', producto.id)} className="btn btn-danger">Ver</Link>
                        <Button onClick={() => Borrar(producto.id)} className='btn btn-success'>Eliminar</Button>
                      </>
                    )}
                    {!usuario && (
                      <Link to={VER.replace(':id', producto.id)} className="btn btn-danger">Ver</Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Paginador */}
          <div className='paginador'>
            <Button onClick={paginaAnterior} disabled={paginaActual === 1}>
              <FaArrowLeft />
            </Button>

            <span>
              Página {paginaActual} de {totalPaginas}
            </span>

            <Button onClick={paginaSiguiente} disabled={paginaActual === totalPaginas}>
              <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
