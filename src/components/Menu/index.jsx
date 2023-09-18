import { Link, useLocation } from "react-router-dom";

import style from "./style.module.css";
import { useState } from "react";

export function Menu() {
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();

  let name = pathname.replace("/", "");

  if (name === "") name = "home";

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <section className={style.content}>
      <header>
        <div className={style.title}>
          <h1>Adrianne Jhulya</h1>
        </div>
        <nav className={active ? style.active : null}>
          <div className={style.responsive_menu} onClick={handleActive}>
            <span>Menu</span>
          </div>
          <ul className={active ? style.top : null}>
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
                className={pathname.includes("exhibitions") ? style.focus : null}
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
