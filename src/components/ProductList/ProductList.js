import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import { ProductListContainer, ProductListTitle } from './styles';

export default class ProductList extends Component {
  state = {};

  render() {
    const {
      products,
      title,
      isStartPage,
      onAddToCart,
      onCount,
      onDelete,
    } = this.props;
    return (
      <div>
        <ProductListTitle>{title}</ProductListTitle>
        <ProductListContainer>
          {products.map(item => (
            <Product
              key={item.id}
              {...item}
              isStartPage={isStartPage}
              onAddToCart={onAddToCart}
              onCountUpdate={onCount}
              onDeleteProduct={onDelete}
            />
          ))}
        </ProductListContainer>
      </div>
    );
  }
}
