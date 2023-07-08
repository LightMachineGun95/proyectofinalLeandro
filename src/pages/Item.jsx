import React, {useEffect, useState} from 'react'


import {collection, getDocs, getFirestore} from "firebase/firestore"
import LoaderComponent from '../components/LoaderComponent';
import ItemDetailContainer from '../components/ItemDetailContainer';
import { useParams } from 'react-router-dom';

const homeStyles = {
  width: "100vw",
  minHeight: "100vh",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const Item = () => {

    const {itemId} = useParams();
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const db = getFirestore();
        const productCollection = collection(db, "products");
        getDocs(productCollection)
        .then((snapshot) => {
            setProductsData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })));
            
        })
        .catch((error) => setError(true))
        .then(() => setLoading(false));
    }, []);
  
  const productsFilteredById = productsData.filter(products => products.id === parseInt(itemId));
  
  return(
    <div style={homeStyles}>
    {loading ? (
    <LoaderComponent />
    ) : error ? (
        <div>Error</div>
    ) : (
    <ItemDetailContainer productsData={productsFilteredById} />
    )
    }
    </div> 
  )
}

export default Item 