import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { LINKS } from "../../utils/data";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { getTop } from "../../utils/functions";

export function Product() {
  const { link, id } = useParams();
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const res = LINKS.find((item) => item.section === "produtos");

    const response = res.imgs.find((item) => item.section === link).photos;
    const title = res.imgs.find((item) => item.section === link).title;
    
    const data = response.find((item) => item.id == id)

    setTitle(title);
    setData(data.photos);
  }, [link, id]);

  getTop()
  return (
    <Container title={`${link} ${title ? `-${title}` : ''}`}>
      {data.map((item) => {
        return <Card data={item} key={item.id} />;
      })}
    </Container>
  );
}
