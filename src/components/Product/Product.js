import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
import {
  Container,
  Wrapper,
  Title,
  Description,
  Price,
  StyledButton,
} from './styles';
// import { setCurrentPostId } from '../../redux/currentPost/currentPostActionCreators';
// import { changeDate } from '../../service/helper';

class Product extends Component {
  state = {
  };

  //   deleteBtn = e => {
  //     const { onDelete } = this.props;
  //     e.preventDefault();
  //     onDelete({ ...this.state });
  //   };

  render() {
    const { title, description, price } = this.props;
    return (
      <Container>
        <Wrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Price>
            <b>Price: </b>
            {price}
          </Price>
          <StyledButton basic color="blue">
            Add to cart
          </StyledButton>
        </Wrapper>
      </Container>
    );
  }
}

// Product.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
//   creator: PropTypes.string,
//   date: PropTypes.string,
//   setCurrentPostId: PropTypes.func,
//   onDelete: PropTypes.func.isRequired,
// };
// Product.defaultProps = {
//   creator: '',
//   date: '20.12.2017',
//   setCurrentPostId: null,
// };
// const mapDispatchToProps = dispatch => ({
//   setCurrentPostId: postId => dispatch(setCurrentPostId(postId)),
// });

// export default connect(
//   null,
//   mapDispatchToProps,
// )(PostPreview);
export default Product;
