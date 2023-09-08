import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { LINKS } from "../../utils/data";
import { Cards } from "../../components/Cards";
import { Card } from "../../components/Card";
import { useParams } from "react-router-dom";

export function ProductsSection() {
  const { link } = useParams();
  const [data, setData] = useState([]);
  const [section, setSection] = useState([]);

  useEffect(() => {
    const response = LINKS[5].imgs.find((item) => item.section === link).photos;
    setSection(link);
    setData(response);
  }, [link]);

  return (
    <Container title={section}>
      {data.map((item) => {
        if (item.photos) {
          return (
            <Cards
              src={item.src}
              title=""
              to={`/colection/${section}/${item.id}`}
              key={item.id}
            />
          );
        }
        return <Card data={item} key={item.id} />;
      })}
    </Container>
  );
}
