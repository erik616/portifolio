import { Player } from "../VideoPlayer";
import style from "./style.module.css";
import { useState } from "react";

export function Card({ data, big }) {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const rotate = data.rotate;
  console.log(rotate);

  return (
    <>
      <div
        className={`${style.card_content} ${
          big ? style.card_full : style.card
        } ${rotate ? style[rotate] : null} ${
          data.full ? style.full_width : null
        }`}
        onClick={handleModal}
      >
        {data.video ? (
          <Player src={data.src} />
        ) : (
          <img src={data.src} alt={data.title} />
        )}
      </div>
      <Modal active={openModal} setActive={handleModal} item={data} />
    </>
  );
}

function Modal({ active, setActive, item }) {
  if (!active) return;

  return (
    <div className={style.content_modal}>
      <div className={style.content}></div>
      <div
        className={`${style.modal}  ${item.rotate ? style.horizontal : null} `}
      >
        <span className={style.icon} onClick={setActive}>
          x
        </span>
        <img src={item.src} alt={item.title} />
        <p>
          Adrianne Jhulya da Silva Mendes <br />
          {item.title && (
            <>
              {item.title}
              <br />
            </>
          )}
          {item.technique} <br />
          {item.size && (
            <>
              {item.size}
              <br />
            </>
          )}
          {item.year} <br />
        </p>
        <br />
      </div>
    </div>
  );
}
