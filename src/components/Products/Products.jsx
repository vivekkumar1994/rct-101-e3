import React from "react";
import Product from "./Product/Product";

const Products = ({products}) => {
//  console.log(products);
  return <div>{/* Code here */}
  <h1>Products</h1>
  <div >
 {products.map((product)=>(
   <Product key={product.id} product={product} />
 ))}
  </div>
  </div>;
};

export default Products;