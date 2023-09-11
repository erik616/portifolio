import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { LINKS } from "../../utils/data";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";

export function Product() {
  const { link, id } = useParams();
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  window.scrollTo(0, 0);

  console.log("ID", id);
  useEffect(() => {
    const res = LINKS.find((item) => item.section === "produtos");

    const response = res.imgs.find((item) => item.section === link).photos;
    const title = res.imgs.find((item) => item.section === link).title;
    
    const data = response.find((item) => item.id == id)

    setTitle(title);
    setData(data.photos);
  }, [link, id]);
  console.log(link, data);

  return (
    <Container title={`${link} ${title ? `-${title}` : ''}`}>
      {data.map((item) => {
        return <Card data={item} key={item.id} />;
      })}
    </Container>
  );
}