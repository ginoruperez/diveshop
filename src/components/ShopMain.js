import React from 'react';
import Product from './Product';



function ShopMain(props) {
    const { products, onAdd, removeItem } = props; 
    return (
        <div>

            <h2>Products</h2>
            <div className="col-sm">
                {products.map((product) => (
                    <div className="card-product" >
                        <Product key={product.id} product={product} onAdd={onAdd} removeItem={removeItem}></Product>
                    </div>
                ))}
            </div>

            
        </div >
    );
}

export default ShopMain;

