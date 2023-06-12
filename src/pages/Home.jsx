import React from 'react'

import { ProductsData } from "../json/Products";
import ItemListContainer from '../components/ItemListContainer';

const Home = () => {
        
    return (
        <div className="App">
           <ItemListContainer productsData={ProductsData}/>
        </div>
    )
}

export default Home