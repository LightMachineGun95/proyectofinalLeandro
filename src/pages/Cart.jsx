import React, { useContext, useEffect, useState } from "react";
import { collection, getDoc, doc, getFirestore } from "firebase/firestore";

import { CartContext } from "../context/CartContext";
import CartDetailCard from "../components/CartDetailCard/CartDetailCard";
import LoaderComponent from "../components/LoaderComponent";

const fetchProductsByIds = async (ids) => {
  const db = getFirestore();
  const productRefs = ids.map((id) => doc(collection(db, "products"), id));

  const productSnapshots = await Promise.all(
    productRefs.map((productRef) => getDoc(productRef))
  );

  const products = productSnapshots.map((productSnapshot) => {
    if (productSnapshot.exists()) {
      return { id: productSnapshot.id, ...productSnapshot.data() };
    } else {
      return null;
    }
  });

  return products.filter((product) => product !== null);
};

const styles = {
  cartWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100vw",
    height: "100vh",
  },
  productCardDetail: {
    width: "60%",
  },
};

const Cart = () => {
  
  const [error, setError] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { count } = useContext(CartContext);

  console.log(count);

  useEffect(() => {
    const ids = count.products.map((product) => product.productId);
    fetchProductsByIds(ids)
      .then((res) => {
        console.log(res);
        setProductsData(res);
      })
      .catch((err) => setError(err))
      .then(() => setLoading(false));
  }, [count]);

  return loading ? (
    <LoaderComponent />
  ) : (
    <div style={styles.cartWrapper}>
      <div style={styles.productCardDetail}>
        {productsData.map((product) => (
          <CartDetailCard
            key={product.id}
            product={product}
            qty={count.products.find((item) => item.productId === product.id)}
          />
        ))}
      </div>
    </div>
  );
};
export default Cart;