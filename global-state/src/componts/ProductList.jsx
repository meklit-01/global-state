import React from 'react'
import products from '../data/products'

function ProductList() {
  return (
    <div>
        <h2>Products</h2>
        {products.map((product)=>(
            <div key={product.id}>
                <h3>{product.name}</h3>
                <p>Price: {product.price} ETB</p>
                <button>Add to Cart</button>
            </div>    
        ))}
    </div>
  )
}

export default ProductList