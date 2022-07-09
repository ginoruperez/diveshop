import React, { useState } from 'react'


import openwatersmall from './images/products/services-openwater-small.jpg';
import advancedopensmall from './images/products/services-advancedopen-small.jpg';



export default function ProductCard({ product }) {

  const [active, setActive] = useState(true);

  return (


    <div>

      {/*}
      <Card elevation={2}>
        <CardHeader
          action={
            <IconButton onClick={e => {
              console.log("add to fav", product.id)
              setActive(!active);


            }}

            >
              {active ? <FavoriteBorderSharpIcon /> : <FavoriteIcon color="secondary" />}

            </IconButton>
          }
          title={product.title}
          subheader={product.type}


        />
        <CardMedia
          component="img"
          height="300"
          width="300"
          image={product.filename}
          alt={product.rating}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {product.description}

          </Typography>

          <Typography variant="body2" color="text.primary">
            € {product.price}

          </Typography>

        </CardContent>
        <CardActions sx={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <IconButton onClick={() => window.location.replace("/Order")}>
            <ShoppingCartIcon color="secondary" />
          </IconButton>

        </CardActions>

      </Card>
      */}

      <div className="row">
        <div className="col-sm">
          <div className="card">
            <h6 className="card-title">{product.title}</h6>
            <img className="card-img-top" alt="discover scuba" src={product.filename} />
            <div className="card-body">
              <h5 className="card-title">{product.description}</h5>
              <p className="card-text">€ {product.price}</p>
            </div>
            <div className="card-footer">
              <a type="button" href="/Order" className="btn btn-success float-end"
                data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
                Order
              </a>

            </div>
          </div>
        </div>

        {/* static order page */}

        <div className="offcanvas offcanvas-start shopping-cart-offcanvas" data-bs-scroll="true" tabindex="-1"
          id="shoppingCart" aria-labelledby="shoppingCartLabel">

          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="shoppingCartLabel">Your shopping cart</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Total</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="col-sm-8 col-md-6">
                      <div className="media">
                        <img className="mr-3 thumbnail img-fluid" width="75"
                          src={product.filename} alt="diving products" />
                        <div className="media-body">
                          <h5 className="mt-0 media-heading text-primary">{product.description}</h5>
                          <span>Status: </span><span className="text-success"><strong>Available</strong></span>
                        </div>
                      </div>
                    </td>
                    <td className="col-sm-1 col-md-1" >
                      <input type="number" className="form-control" min="1" max="100" />
                    </td>
                    <td className="col-sm-1 col-md-1 text-center"><strong>€{product.price} </strong></td>
                    <td className="col-sm-1 col-md-1 text-center"><strong>€{product.price} </strong></td>
                    <td className="col-sm-1 col-md-1">
                      <button type="button" className="btn btn-danger">
                        X
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" className="text-right">
                      <h5>Subtotal</h5>
                    </td>
                    <td className="text-center">
                      <h5><strong>€ {product.price}</strong></h5>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colspan="3" className="text-right">
                      <h5>Shipping</h5>
                    </td>
                    <td className="text-center">
                      <h5><strong>€10.00</strong></h5>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colspan="3" className="text-right">
                      <h3>Total</h3>
                    </td>
                    <td className="text-center">
                      <h3><strong>€{product.price+10}</strong></h3>
                    </td>
                    <td></td>

                  </tr>

                </tbody>
              </table>
            </div>

            <form className="m-1">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code" />
                <div className="input-group-append">
                  <button type="button" className="btn btn-secondary">Redeem</button>
                </div>
              </div>
            </form>
            <a type="button" href="/Order" className="m-1 btn btn-success">
              Go to order page
            </a>

            <a type="button" href="/" className="m-1 btn btn-danger" data-bs-toggle="modal"
              data-bs-target="#cancelModal">
              Clear your shopping cart
            </a>

          </div>
        </div>

        {/*End of static order page*/}




      </div>


    </div>
  )
}
