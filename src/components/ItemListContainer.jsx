import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Item from "./Item/Item";

const ItemListContainer = ({ greeting }) => {

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then(res => setProductsData(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  return (
    //<div style={{ fontSize: "2rem", color: "green", margin: "2px" }}>{greeting}</div>

    <div>
      <Item productsData={productsData} />
    </div>

  )
}

export default ItemListContainer