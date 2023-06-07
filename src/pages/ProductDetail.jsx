import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const ProductDetail = () => {
  const [productsData, setProductData] = useState({});
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();
  useEffect(() => {
  axios
  .get (`https://dummyjson.com/products/${productId}`)
  .then(res => {
    setProductData(res.data);
    setLoading(false)
  })  ;
}, []);
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="Cards container">
          <div key={productsData.id} className='Card'>
            <div className='Title'>{productsData.title}</div>
            <div className='Images'>
              <img src={productsData.images[0]} alt="imagenes" />
            </div>
            <div className='Description'>{productsData.description}</div>
            <div className='Price'>${productsData.price}</div>
            <button className='Boton-Agregar'>Agregar al Carrito</button>
          </div>
    </div>
  )
}

export default ProductDetail