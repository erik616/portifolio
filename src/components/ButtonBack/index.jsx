import style from "./style.module.css"
import back from "../../assets/arrowback.svg";
import { useNavigate } from "react-router-dom";

export function ButtonBack() {
    const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleBack} className={style.button_back}>
      <img src={back} />
    </button>
  );
}
