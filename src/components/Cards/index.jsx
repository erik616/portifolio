import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

export function Cards({ src, title, to }) {
  const navigate = useNavigate();

  const handleGalery = () => {
    navigate(to);
  };

  return (
    <>
      <div className={style.card_container} onClick={handleGalery}>
        <div className={style.card0}></div>
        <div className={style.card1}></div>
        <div className={style.card}>
          <img src={src} alt={title} />
        </div>
        <h2>{title}</h2>
      </div>
    </>
  );
}
