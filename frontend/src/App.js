import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Product from './pages/admin/Product'
import ProductList from './pages/client/product/ProductList'
import ProductDetail from './pages/client/product/ProductDetail'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Product} />
        <Route path="/products" exact component={ProductList} />
        <Route path="/product-detail/:slug" component={ProductDetail} />
      </Router>
    );
  }
}

export default App;
