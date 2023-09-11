import { LINKS } from "../../utils/data";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Container } from "../../components/Container";

import style from "./style.module.css/";
import { ButtonBack } from "../../components/ButtonBack";
import { getTop } from "../../utils/functions";

export function Exhibitions() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const res = LINKS.find((item) => item.section === "exposições").data;
    setData(res);
  }, []);

  const handleShow = (id) => {
    navigate(`/exhibitions/expo/${id}`);
  };

  getTop()
  return (
    <Container title="Exposições">
      <div className={style.expo}>
        {data
          .map((item) => {
            return (
              <ul key={item.id}>
                <li>
                  <span>exposição: </span>
                  {item.name}
                </li>
                <li>
                  <span>local: </span>
                  {`${item.locale} - ${item.date}`}{" "}
                </li>
                <li>
                  <span>função: </span>
                  {item.function}
                </li>
                {item.src && (
                  <li>
                    <img
                      className={style.expo_banner}
                      src={item.src}
                      alt={item.name}
                      onClick={item.photos ? () => handleShow(item.id) : null}
                    />
                  </li>
                )}
              </ul>
            );
          })
          .reverse()}
      </div>
    </Container>
  );
}

export function Expo() {
  const { id } = useParams();
  const [expo, setExpo] = useState([]);

  useEffect(() => {
    const res = LINKS.find((item) => item.section === "exposições").data;
    const response = res.find((item) => item.id == id).photos;
    setExpo(response);
  }, [id]);

  return (
    <>
      <ButtonBack />
      <Container title="Exposições">
        <div className={style.expo}>
          {expo.map((item) => {
            return (
              <div className={style.expo_img} key={item.id}>
                <img src={item.src} />
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
