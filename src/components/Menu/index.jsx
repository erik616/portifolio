import { Link, useLocation } from "react-router-dom";

import style from "./style.module.css";

export function Menu() {
  const { pathname } = useLocation();

  let name = pathname.replace("/", "");

  if (name === "") name = "home";

  return (
    <section className={style.content}>
      <header>
        <div className={style.title}>
          <h1>Adrianne Jhulya</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" className={name === "home" ? style.focus : null}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/galery"
                className={pathname.includes("galery") ? style.focus : null}
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link
                to="/exhibitions"
                className={name === "exhibitions" ? style.focus : null}
              >
                Exposições
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={pathname.includes("products") ? style.focus : null}
              >
                Produtos
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={name === "about" ? style.focus : null}
              >
                Sobre mim
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}
