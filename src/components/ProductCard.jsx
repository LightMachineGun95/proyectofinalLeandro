import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CartButtons from './CartButtons';

const ProductCard = ({ productData }) => {
  return (
    <Card style={{width: '20rem', margin: "5px"}} className='card text-center rounded-3'>
      <Card.Img variant="top" src={productData.image} />
      <Card.Body>
        <Card.Title as="h2">{productData.tittle}</Card.Title>
        <Card.Text as="h6">
          {productData.description}
        </Card.Text>
        <Card.Text as="h4">
          Precio: ${productData.price}
        </Card.Text>
        <Card.Text as="h5">
          En stock: {productData.stock}
        </Card.Text>
        <CartButtons productId={productData.id}/>
        <Link to={`/item/${productData.id}`}>Ir a detalle</Link>
      </Card.Body>
    </Card>
  )
}

export default ProductCard