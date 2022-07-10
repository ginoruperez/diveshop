import React from 'react';

export default function Product(props) {
    const { product, onAdd } = props;
    return (
        <div>

            <div className="container">
                <div className="col-sm">
                    <div className="card">

                        <h6 className="card-title">{product.title}</h6>
                        <img className="card-img-top" alt="product" src={product.image} />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">€ {product.price}</p>
                        </div>
                        <div className="card-footer">

                            <a type="button" onClick={() => onAdd(product)} href="/Shop" className="btn btn-success float-end"
                                data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">

                                Add to Cart
                            </a>


                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}




