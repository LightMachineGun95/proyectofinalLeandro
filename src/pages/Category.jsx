import React, { useEffect, useState } from 'react'


import { collection, getDocs, getFirestore } from "firebase/firestore"
import LoaderComponent from '../components/LoaderComponent';
import ItemListContainer from '../components/ItemListContainer';
import { useParams } from 'react-router-dom';

const homeStyles = {
  width: "100vw",
  minHeight: "100vh",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const Category = () => {
  const { categoryId } = useParams()
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const productCollection = collection(db, "products");
    getDocs(productCollection)
      .then((snapshot) => {
        setProductsData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

      })
      .catch((error) => setError(true))
      .then(() => setLoading(false));
  }, []);

  const productsFilteredByCategory = productsData.filter(products => products.category === categoryId);

  return (
    <div style={homeStyles}>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>Error</div>
      ) : (
        <ItemListContainer productsData={productsFilteredByCategory} />
      )
      }
    </div>
  )
};

export default Category