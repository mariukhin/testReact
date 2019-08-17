import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { products } from './assets/products';

ReactDOM.render(<App products={products} />, document.getElementById('root'));
