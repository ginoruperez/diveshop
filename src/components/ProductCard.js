import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product, onAdd, handleDelete, isAdmin }) {
  const { id } = product;



  const navigateTo = useNavigate();

  const handleCreate = (e) => {
    if(isAdmin){
      navigateTo('/CreateProduct');
    }else{
      window.alert('Not allowed! Login required')
    }
  }

  return (


    <div>

      <div className="row">
        <div className="col-sm">
          <div className="card">

            <h6 className="card-title">{product.title}</h6>
            <img className="card-img-top" alt="discover scuba" src={product.filename} style={{ "height" : "330px"}} />
            <div className="card-body">
              <h5 className="card-title">{product.description}</h5>
              <p className="card-text">€ {product.price}</p>
            </div>
            <div className="card-footer">

              <a type="button" onClick={() => onAdd(product)} href="/Shop" className="btn btn-success float-end"
                data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
                Add to Cart
              </a>

              <button className="btn" onClick={() => { handleDelete(id) }} ><i className="fa fa-trash"></i></button>
              <button className="btn" onClick={() => { handleCreate() }}><i className="fa fa-plus"></i></button>


            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
