import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { products } from '../../assets/products';
import ProductList from '../../components/ProductList/ProductList';

export default class CartPage extends Component {
  render() {
    const cartProducts = products.slice(0, 2);
    return (
      <div>
        <ProductList products={cartProducts} title="Cart" />
      </div>
    );
  }
}
