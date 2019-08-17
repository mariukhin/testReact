import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
// import { NavLink } from 'react-router-dom';
// import { mapper } from '../../services/helper';
// import SearchForm from '../../components/SearchForm/SearchForm';
// import Gallery from '../../components/Gallery/Gallery';
// import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
// import styles from './StartPage.module.css';

export default class StartPage extends Component {
  state = {
    pics: [],
    page: 1,
    inputVal: '',
    isLoadMore: false,
    currentUserId: '',
  };

  // componentDidMount() {
  //   // this.fetchLikedItems();
  //   this.fetchInfo();
  //   this.fetchItems('popular');
  // }

  render() {
    const { products } = this.props;
    return (
      <div>
        <ProductList products={products} title="Products" />
      </div>
    );
  }
}
