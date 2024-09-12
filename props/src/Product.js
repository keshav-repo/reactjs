import React from 'react';
import PropTypes from "prop-types";

function Product(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Price: ${props.price}</p>
        </div>
    );
}

Product.defaultProps = {
    price: 999
}

Product.prototype = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number
}

export default Product;
