import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { store } from './redux/store';
import { products } from './assets/products';

ReactDOM.render(
  <Provider store={store}>
    <App products={products} />
  </Provider>,
  document.getElementById('root'),
);
