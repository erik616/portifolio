import style from "./style.module.css";

export function Container({ children, title }) {
  return (
    <section className={style.galary}>
      {title ? <h1>{title}</h1> : null}
      <div className={style.galary_container}>{children}</div>
    </section>
  );
}
