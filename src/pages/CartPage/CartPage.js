import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductList from '../../components/ProductList/ProductList';
import * as cartSelectors from '../../redux/cart/cartSelectors';
import * as totalPriceSelectors from '../../redux/totalPrice/totalPriceSelectors';
import {
  updateCount,
  deleteProduct,
} from '../../redux/cart/cartActionCreators';
import { updateTotalPrice } from '../../redux/totalPrice/totalPriceActionCreators';

const TotalPrice = styled.p`
  text-align: center;
  font-size: 24px;
  line-height: 24px;
  font-weight: 600;
`;

class CartPage extends Component {
  onUpdateCount = product => {
    const { updateCount } = this.props;
    updateCount(product);
  };

  onDeleteProduct = product => {
    const { deleteProduct } = this.props;
    deleteProduct(product.id);
  };

  render() {
    const { cart, totalPrice } = this.props;
    return (
      <div>
        <TotalPrice>
          <b>Total price: </b>
          {totalPrice}
        </TotalPrice>
        <ProductList
          products={cart}
          onCount={this.onUpdateCount}
          onDelete={this.onDeleteProduct}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cart: cartSelectors.getCart(state),
  totalPrice: totalPriceSelectors.getTotalPrice(state),
});

const mapDispatchToProps = dispatch => ({
  updateCount: product => dispatch(updateCount(product)),
  deleteProduct: id => dispatch(deleteProduct(id)),
  updateTotalPrice: price => dispatch(updateTotalPrice(price)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartPage);
