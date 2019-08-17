import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import StartPage from '../pages/StartPage/StartPage';
import CartPage from '../pages/CartPage/CartPage';
import Header from './Header/Header';
import './stylesApp.css';
import 'semantic-ui-css/semantic.min.css';

function App({ products }) {
  return (
    <ToastProvider placement="top-center">
      <>
        <Router>
          <Header />
          <Route
            exact
            path="/"
            render={() => <StartPage products={products} />}
          />
          <Route exact path="/cart" component={CartPage} />
        </Router>
      </>
    </ToastProvider>
  );
}

export default App;
