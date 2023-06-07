import React from 'react'
import { useState } from 'react';

import ItemListContainer from '../components/ItemListContainer';

const Home = () => {
        const [count, setCount] = useState(0);

        const handleSumar = () => {
            setCount(count + 1);
        }
        const handleRestar = () => {
            setCount(count - 1);
        }
    return (
        <div className="App">
           <ItemListContainer greeting="WeedExpertos! Compra una semilla magica para tu cultivo!" />
            <div>
                <button onClick={handleRestar}>-</button>
                <span>{count}</span>
                <button onClick={handleSumar}>+</button>
            </div>
        </div>
    )
}

export default Home