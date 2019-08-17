import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductList from '../../components/ProductList/ProductList';
import * as cartSelectors from '../../redux/cart/cartSelectors';
import * as totalPriceSelectors from '../../redux/totalPrice/totalPriceSelectors';
import {
  updatecount,
  deleteproduct,
} from '../../redux/cart/cartActionCreators';
import { updatetotalPrice } from '../../redux/totalPrice/totalPriceActionCreators';

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
CartPage.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      count: PropTypes.number,
    }),
  ).isRequired,
  totalPrice: PropTypes.number.isRequired,
  updateCount: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  cart: cartSelectors.getCart(state),
  totalPrice: totalPriceSelectors.getTotalPrice(state),
});

const mapDispatchToProps = dispatch => ({
  updateCount: product => dispatch(updatecount(product)),
  deleteProduct: id => dispatch(deleteproduct(id)),
  updateTotalPrice: price => dispatch(updatetotalPrice(price)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartPage);
