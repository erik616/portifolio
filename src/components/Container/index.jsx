import { useState } from "react";
import style from "./style.module.css";

import arrow from "../../assets/arrowback.svg";

export function Container({ children, title }) {
  const [visible, setVisible] = useState(false);

  const setVisibleButton = () => {
    const windowLocale = document.documentElement.scrollTop;

    if (windowLocale >= 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const handleGetTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  
  window.addEventListener("scroll", setVisibleButton);
  return (
    <section className={style.galary}>
      {title ? <h1>{title}</h1> : null}
      <div className={style.galary_container}>{children}</div>
      {visible ? (
        <button className={style.buttontop} onClick={handleGetTop}>
          <img src={arrow} />
        </button>
      ) : null}
    </section>
  );
}
