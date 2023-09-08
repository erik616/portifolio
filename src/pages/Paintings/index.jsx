import { Container } from "../../components/Container";
import { LINKS } from "../../utils/data";
import { Cards } from "../../components/Cards";
import { Card } from "../../components/Card";
import { useEffect, useState } from "react";

export function Paintings() {
  const [data, setData] = useState([]);
  const [section, setSection] = useState([]);

  useEffect(() => {
    const response = LINKS[1].imgs;
    const route = LINKS[1].section;
    setSection(route);
    setData(response);
  }, []);

  return (
    <Container title="Pinturas">
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
