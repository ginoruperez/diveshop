import React from 'react';

export default function Header(props) {
    return (
        <div>                        

            <div className="container">
                <div>
                    <h1 className="fw-bolder text-center" > Dive Shop
                        <small className="fw-normal fst-italic"> Your Shopping Cart </small>
                        {' '}
                        {props.countCartItems ? (
                            <button type="button" class="btn btn-primary" >{props.countCartItems}</button>
                        ) : (
                            ''
                        )}
                    </h1> {' '}
                </div>
            </div>
        </div>
    );
}
