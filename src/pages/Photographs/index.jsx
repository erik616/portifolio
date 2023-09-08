import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Cards } from "../../components/Cards";
import { Container } from "../../components/Container";
import { LINKS } from "../../utils/data";

export function Photographs() {
  const [data, setData] = useState([]);
  const [section, setSection] = useState([]);

  useEffect(() => {
    const response = LINKS[2].imgs;
    const route = LINKS[2].section;
    setSection(route);
    setData(response);
  }, []);

  return (
    <Container title="Fotografias">
      {data.map((item) => {
        if (item.photos) {
          return (
            <Cards
              src={item.src}
              title=''
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
