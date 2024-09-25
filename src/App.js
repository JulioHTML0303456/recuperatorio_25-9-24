import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [category, setCategory] = useState("");
  const [productos, setproductos] = useState([])
  const [errorMessage, seterrorMessage] = useState("")




  const setdata1 = () => {
    axios.get('https://fakestoreapi.com/product')
      .then((responce) => setproductos(responce.data))
      .catch((error) => {
        if(error != 200){
          console.log(error)
        }
          
      })
  }
  

  /*const setdata2 = () => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then((cat) => setCategory(cat))
  }*/


  useEffect(() => {
    setdata1()
    //setdata2()

  }, []);

  console.log(productos)



  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  const filtrar = () => {
    setproductos(productos.filter((producto) => producto.category === category))
  }

  return (
    <main>

      <h1>Recuperatorio Requests con React</h1>

      <div>
        <h2>Lista de todos los productos disponibles:</h2>

        <p className="result-box">
          <ul>
            {productos.map((producto) => <li key={producto.id}>{producto.title}</li>)}
          </ul>
        </p>
      </div>

      <div>
        <h2>Obtener productos de una categoría determinada</h2>

        <h3>Ingrese una categoría:</h3>

        <input type="text" value={category} onChange={handleCategoryChange} />
        <button type='onclick' onSubmit={filtrar}  >Enviar</button>


        <h3>Productos de la categoría ingresada:</h3>
        <p className="result-box">
          <ul>
            {productos.map((producto) => <li key={producto.id}>{producto.title}</li>)}
          </ul>
        </p>
      </div>

      <div>
        <h2>Mensaje en caso de error:</h2>
        <p className="result-box">{errorMessage}</p>
      </div>

      <div>
        <h2>Carritos con al menos 2 productos:</h2>
        <p className="result-box"></p>
      </div>

    </main>
  );
}

export default App;
