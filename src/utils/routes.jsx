import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";

import { Galery } from "../pages/Galery";
import { GalerySection } from "../pages/GalerySection";

import { Exhibitions, Expo } from "../pages/Exhibitions";

import { Products } from "../pages/Products";
import { ProductsSection } from "../pages/ProductsSection";
import { Product } from "../pages/Product";

import { About } from "../pages/About";

import { Colection } from "../pages/Colection";

export function MyRoutes() {
  return (
    <Routes>
      <Route Component={Home} path="/"></Route>

      <Route Component={Galery} path="/galery"></Route>
      <Route Component={GalerySection} path="/galery/:link"></Route>

      <Route Component={Exhibitions} path="/exhibitions"></Route>
      <Route Component={Expo} path="/exhibitions/expo/:id"></Route>

      <Route Component={Products} path="/products"></Route>
      <Route Component={ProductsSection} path="/products/:link"></Route>
      <Route Component={Product} path="/products/:link/:id"></Route>

      <Route Component={About} path="/about"></Route>
      
      <Route Component={Colection} path="/colection/:section/:id"></Route>

      <Route Component={NoMatch} path="*"></Route>
    </Routes>
  );
}


function NoMatch() {
  return (
    <div style={{ display:"flex", alignItems: "center", justifyContent: "center" }}>
      <h1>*Not Found*</h1>
    </div>
  );
}