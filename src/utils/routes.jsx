import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Galery } from "../pages/Galery";
import { Photographs } from "../pages/Photographs";
import { Xilo } from "../pages/Xilo";
import { Paintings } from "../pages/Paintings";

import { Exhibitions } from "../pages/Exhibitions";
import { Products } from "../pages/Products";
import { About } from "../pages/About";
import { Designs } from "../pages/Designs";
import { Colection } from "../pages/Colection";
import { Three } from "../pages/Three";
import { GalerySection } from "../pages/GalerySection";
import { ProductsSection } from "../pages/ProductsSection";

export function MyRoutes() {
  return (
    <Routes>
      <Route Component={Home} path="/"></Route>
      <Route Component={Galery} path="/galery"></Route>

      <Route Component={GalerySection} path="/galery/:link"></Route>

      <Route Component={Xilo} path="/galery/xilo"></Route>
      <Route Component={Paintings} path="/galery/paintings"></Route>
      <Route Component={Photographs} path="/galery/photographs"></Route>
      <Route Component={Designs} path="/galery/designs"></Route>
      <Route Component={Three} path="/galery/three"></Route>

      <Route Component={Colection} path="/colection/:section/:id"></Route>

      <Route Component={Exhibitions} path="/exhibitions"></Route>

      <Route Component={Products} path="/products"></Route>
      <Route Component={ProductsSection} path="/products/:link"></Route>

      <Route Component={About} path="/about"></Route>

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