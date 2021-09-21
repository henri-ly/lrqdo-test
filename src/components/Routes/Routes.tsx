import Layout from "components/Layout/Layout";
import Home from "pages/Home";
import Product from "pages/Product";
import ProductList from "pages/ProductList";
import React from "react";
import { Route, Switch } from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/products/:id">
          <Product />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*"></Route>
      </Switch>
    </Layout>
  );
};

export default Routes;
