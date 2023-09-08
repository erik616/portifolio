import { BrowserRouter as Router } from "react-router-dom";
import { MyRoutes } from "./utils/routes";
import { Menu } from "./components/Menu";
import style from "./style.module.css";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <Router>
      <section className={style.container}>
        <Menu />
        <MyRoutes />
      </section>
      <Footer />
    </Router>
  );
}
