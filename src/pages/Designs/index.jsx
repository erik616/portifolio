import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { Cards } from "../../components/Cards";
import { Card } from "../../components/Card";
import { LINKS } from "../../utils/data";
import { useParams } from "react-router-dom";

export function Designs() {
  const { section: link } = useParams();
  const [data, setData] = useState([]);
  const [section, setSection] = useState([]);

  useEffect(() => {
    const response = LINKS[3].imgs;
    const route = LINKS[3].section;
    setSection(route);
    setData(response);

    // let test =
    console.log(response);
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
