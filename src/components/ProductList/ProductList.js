import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import { ProductListContainer, ProductListTitle } from './styles';

const ProductList = ({
  products,
  title,
  isStartPage,
  onAddToCart,
  onCount,
  onDelete,
}) => (
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
ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      count: PropTypes.number,
    }),
  ).isRequired,
  title: PropTypes.string,
  isStartPage: PropTypes.bool,
  onAddToCart: PropTypes.func,
  onCount: PropTypes.func,
  onDelete: PropTypes.func,
};
ProductList.defaultProps = {
  title: '',
  isStartPage: false,
  onAddToCart: null,
  onCount: null,
  onDelete: null,
};
export default ProductList;
