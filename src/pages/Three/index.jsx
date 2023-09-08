import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { LINKS } from "../../utils/data";
import { Cards } from "../../components/Cards";
import { Card } from "../../components/Card";

export function Three() {
  const [data, setData] = useState([]);
  const [section, setSection] = useState([]);

  useEffect(() => {
    const response = LINKS[4].imgs;
    const route = LINKS[4].section;
    setSection(route);
    setData(response);
  }, []);
  return (
    <Container title="Tridimensional">
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
