import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { LINKS } from "../../utils/data";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";

export function Colection() {
  const { section, id } = useParams();
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  console.log("ID", id);
  useEffect(() => {
    const res = LINKS.find((item) => item.section === section);
    const response = res.imgs.find((item) => item.id == id);
    setTitle(response.title);
    setData(response.photos);
  }, [section, id]);

  return (
    <Container title={title}>
      {data.map((item) => {
        return <Card data={item} key={item.id} big={true}/>;
      })}
    </Container>
  );
}
