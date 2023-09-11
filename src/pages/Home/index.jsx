import style from "./style.module.css";

import { Container } from "../../components/Container";
import { BANNER_ITENS } from "../../utils/data";
import { useEffect, useState } from "react";

export function Home() {
  const itens = BANNER_ITENS;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === itens.length) setCount(0);
  }, [count, itens]);

  setTimeout(() => {
    ShowSlides();
    setCount(count + 1);
  }, 3000);

  const ShowSlides = () => {
    return (
      <img
        className={`${style.item} ${style.active}`}
        src={itens[count]}
      />
    );
  };

  return (
    <Container>
      <section className={style.banner}>
        <ShowSlides />
      </section>
    </Container>
  );
}
