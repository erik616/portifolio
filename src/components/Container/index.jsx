import style from "./style.module.css";

export function Container({ children, title }) {
  return (
    <section className={style.galary}>
      <h1>{title}</h1>
      <div className={style.galary_container}>{children}</div>
    </section>
  );
}
