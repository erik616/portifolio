import style from "./style.module.css";

import whatssapp from "../../assets/whatsapp.svg";
import behance from "../../assets/behance.svg";
import instagram from "../../assets/instagram.svg";
import pinterest from "../../assets/pinterest.svg";
import { useEffect, useState } from "react";

export function Footer() {
  const [msg, setMsg] = useState("");
  const [disable, setDisable] = useState(true);
  const year = new Date().getFullYear();

  useEffect(() => {
    if (!msg) {
      setDisable(true);
      return;
    }
    setDisable(false);
  }, [msg]);

  const handleSend = () => {
    if (!msg) return;
    setTimeout(() => {
      window.open(
        `https://api.whatsapp.com/send?phone=5538991205422&text=${msg}`
      );
    }, 100);
  };

  return (
    <footer>
      <p className={style.text_footer}>
        All Content & All Images &copy; 2020 - {year}, Adrianne Jhulya.
        <br />
        All Rights Reserved.
        <br />
        Developed by Erik Dionata.
      </p>
      <div className={style.content_input}>
        <p>Entre em contato:</p>
        <input
          className={style.input_msg}
          type="text"
          onChange={(e) => setMsg(e.target.value)}
        />
        <button
          onClick={handleSend}
          className={disable ? style.disable : null}
          disabled={disable}
        >
          <img src={whatssapp} />
          <p>Enviar</p>
        </button>
        <div>
          <ul>
            <li>
              <a href="https://www.behance.net/adriannejhulya" target="_blank" rel="noreferrer">
                <img src={behance} alt="behance" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/adriannejhulya/" target="_blank" rel="noreferrer">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li>
              <a href="https://br.pinterest.com/adriannejhulya13/" target="_blank" rel="noreferrer">
                <img src={pinterest} alt="pinterest" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
