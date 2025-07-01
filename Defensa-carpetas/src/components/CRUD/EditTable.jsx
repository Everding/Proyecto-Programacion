import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { URL_PRODUCTOS } from '../../Constants/endpoints';
import { useNavigate, useParams } from 'react-router-dom';

const EditTable = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 

  const [producto, setProducto] = useState({
    nombre: '',
    precio: '',
    stock: '',
    categoria: '',
    sucursal: ''
  });

  const categorias = ["refrescos", "agua", "alcohol", "jugos", "energizantes", "deportivos"];
  const sucursales = ["Central", "Norte", "Sur", "Oeste", "Este"];

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const getProducto = async () => {
    try {
      const response = await axios.get(`${URL_PRODUCTOS}/${id}`);
      setProducto(response.data);
    } catch (error) {
      console.error("Error al obtener producto:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${URL_PRODUCTOS}/${id}`, producto);
      console.log("Producto editado");
      navigate('/');
    } catch (error) {
      console.error("Error al editar producto:", error);
    }
  };

  useEffect(() => {
    getProducto();
  }, []);

  return (
    <div className="pageFormContainer">
      <div className="productFormContainer">
        <h2>Editar producto</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="ProductoNombre">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduzca el nombre"
              value={producto.nombre}
              name="nombre"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="PrecioProducto">
            <Form.Label>Precio del producto</Form.Label>
            <Form.Control
              type="number"
              placeholder="Precio"
              value={producto.precio}
              name="precio"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="StockProducto">
            <Form.Label>Stock Disponible</Form.Label>
            <Form.Control
              type="number"
              placeholder="Stock"
              value={producto.stock}
              name="stock"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="CategoriaProducto">
            <Form.Label>Categoría</Form.Label>
            <Form.Select
              value={producto.categoria}
              name="categoria"
              onChange={handleChange}
            >
              <option value="">-- Seleccionar categoría --</option>
              {categorias.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="SucursalProducto">
            <Form.Label>Sucursal</Form.Label>
            <Form.Select
              value={producto.sucursal}
              name="sucursal"
              onChange={handleChange}
            >
              <option value="">-- Seleccionar sucursal --</option>
              {sucursales.map((sucursal) => (
                <option key={sucursal} value={sucursal}>
                  {sucursal}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Button className="botonGuardar" type="submit">
            Guardar cambios
          </Button>

          <Button
            className="botonGuardar"
            type="button"
            onClick={() => navigate('/')}
          >
            Cancelar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditTable;
