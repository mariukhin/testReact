import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withToastManager } from 'react-toast-notifications';
import ProductList from '../../components/ProductList/ProductList';
import { addtoCart } from '../../redux/cart/cartActionCreators';
import * as cartSelectors from '../../redux/cart/cartSelectors';
import { updatetotalPrice } from '../../redux/totalPrice/totalPriceActionCreators';
import * as totalPriceSelectors from '../../redux/totalPrice/totalPriceSelectors';

class StartPage extends Component {
  state = {};

  addNotification = (text, appearance) => {
    const { toastManager } = this.props;
    toastManager.add(text, {
      appearance,
      autoDismiss: true,
      pauseOnHover: true,
    });
  };

  handleAddToCart = product => {
    const { addToCart, cart, totalPrice, updateTotalPrice } = this.props;
    const productToAdd = {
      ...product,
      count: 1,
    };
    const isAdded = cart.find(item => item.id === productToAdd.id);
    if (isAdded) {
      this.addNotification(
        'This product has already been added to the cart',
        'error',
      );
    } else {
      addToCart(productToAdd);
      updateTotalPrice(totalPrice + Number(product.price));
      this.addNotification('You add this product to the cart', 'success');
    }
  };

  render() {
    const { products } = this.props;
    return (
      <div>
        <ProductList
          products={products}
          title="Products"
          isStartPage
          onAddToCart={this.handleAddToCart}
        />
      </div>
    );
  }
}
StartPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      count: PropTypes.number,
    }),
  ).isRequired,
  addToCart: PropTypes.func,
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
  updateTotalPrice: PropTypes.func.isRequired,
  toastManager: PropTypes.shape({
    add: PropTypes.func,
    remove: PropTypes.func,
    toasts: PropTypes.array,
  }).isRequired,
};
StartPage.defaultProps = {
  addToCart: null,
};
const mapStateToProps = state => ({
  cart: cartSelectors.getCart(state),
  totalPrice: totalPriceSelectors.getTotalPrice(state),
});

const mapDispatchToProps = dispatch => ({
  addToCart: cart => dispatch(addtoCart(cart)),
  updateTotalPrice: price => dispatch(updatetotalPrice(price)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withToastManager(StartPage));
