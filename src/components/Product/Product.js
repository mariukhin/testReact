import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {
  Container,
  Wrapper,
  Title,
  Description,
  Price,
  StyledButton,
  CountContainer,
  Count,
} from './styles';
import { updateTotalPrice } from '../../redux/totalPrice/totalPriceActionCreators';
import * as totalPriceSelectors from '../../redux/totalPrice/totalPriceSelectors';

class Product extends Component {
  state = {
    id: this.props.id,
    title: this.props.title,
    description: this.props.description,
    price: this.props.price,
    count: this.props.count,
  };

  componentDidUpdate(prevProps, prevState) {
    const { count, price } = this.state;
    const {
      onCountUpdate,
      onDeleteProduct,
      updateTotalPrice,
      totalPrice,
    } = this.props;
    if (count < 1) {
      onDeleteProduct({ ...this.state });
      updateTotalPrice(totalPrice - Number(price));
    } else if (prevState.count !== count) {
      onCountUpdate({ ...this.state });
      if (prevState.count >= count) {
        updateTotalPrice(totalPrice - Number(price));
      } else {
        updateTotalPrice(totalPrice + Number(price));
      }
    }
  }

  addToCartBtn = e => {
    e.preventDefault();
    const { onAddToCart } = this.props;
    onAddToCart({ ...this.state });
  };

  deleteFromCartBtn = e => {
    e.preventDefault();
    const { onDeleteProduct, totalPrice, updateTotalPrice } = this.props;
    const { price, count } = this.state;
    onDeleteProduct({ ...this.state });
    updateTotalPrice(totalPrice - Number(price) * count);
  };

  countSubtract = e => {
    e.preventDefault();
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  countAdd = e => {
    e.preventDefault();
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  render() {
    const { title, description, price, isStartPage } = this.props;
    const { count } = this.state;
    return (
      <Container>
        <Wrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Price>
            <b>Price: </b>
            {price}
          </Price>
          {isStartPage ? (
            <StyledButton basic color="blue" onClick={this.addToCartBtn}>
              Add to cart
            </StyledButton>
          ) : (
            <>
              <CountContainer>
                <Button
                  negative
                  icon="minus"
                  size="small"
                  onClick={this.countSubtract}
                />
                <Count>{count}</Count>
                <Button
                  positive
                  icon="plus"
                  size="small"
                  onClick={this.countAdd}
                />
              </CountContainer>
              <Button
                floated="right"
                basic
                icon="trash alternate"
                size="medium"
                onClick={this.deleteFromCartBtn}
              />
            </>
          )}
        </Wrapper>
      </Container>
    );
  }
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isStartPage: PropTypes.bool,
  onAddToCart: PropTypes.func,
  onCountUpdate: PropTypes.func,
  onDeleteProduct: PropTypes.func,
  totalPrice: PropTypes.number.isRequired,
  updateTotalPrice: PropTypes.func.isRequired,
};
Product.defaultProps = {
  isStartPage: false,
  onAddToCart: null,
  onCountUpdate: null,
  onDeleteProduct: null,
};

const mapStateToProps = state => ({
  totalPrice: totalPriceSelectors.getTotalPrice(state),
});

const mapDispatchToProps = dispatch => ({
  updateTotalPrice: price => dispatch(updateTotalPrice(price)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
