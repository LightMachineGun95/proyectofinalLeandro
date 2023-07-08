import React, { useState, useEffect } from 'react'

import ItemListContainer from '../components/ItemListContainer';

import {collection, getDocs, getFirestore} from "firebase/firestore"
import LoaderComponent from '../components/LoaderComponent';

const homeStyles = {
    width: "100vw",
    minHeight: "100vh",
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
}

const Home = () => {

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

    return (
        <div style={homeStyles} className='container d-flex justify-content-center'>
            {loading ? (
            <LoaderComponent />
            ) : error ? (
                <div>Error</div>
            ) : (
            <ItemListContainer productsData={productsData} />
            )
        }
        </div>           
        
    )
}

export default Home 