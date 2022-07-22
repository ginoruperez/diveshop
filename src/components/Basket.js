import React from 'react';


export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div className="offcanvas offcanvas-start shopping-cart-offcanvas" data-bs-scroll="true" tabIndex="-1"
    id="shoppingCart" aria-labelledby="shoppingCartLabel">

      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-sm">{item.description}</div>                        
            <div className="col-sm">
              <button   onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button   onClick={() => onAdd(item)} className="add">
                +
              </button>
              
            </div>

            <div className="col-sm text-right">
              {item.qty} x € {item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-sm">Items Price</div>
              <div className="col-sm text-right">€ {itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-sm">Tax Price</div>
              <div className="col-sm text-right">€ {taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-sm">Shipping Price</div>
              <div className="col-sm text-right">
                € {shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <strong>Total Price</strong>
              </div>
              <div className="col-sm text-right">
                <strong>€ {totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="col-md text-center">          

              <a type="button" href="/Order" className="btn btn-success">                
                Checkout
              </a>
              

            </div>
          </>
        )}
      </div>
    </div>
  );
}
