import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { Cards } from "../../components/Cards";
import { Card } from "../../components/Card";
import { LINKS } from "../../utils/data";
import { useParams } from "react-router-dom";

export function GalerySection() {
  const { link } = useParams();
  const [data, setData] = useState([]);
  const [section, setSection] = useState([]);

  useEffect(() => {
    // const response = LINKS[3].imgs;
    const response = LINKS.find((item) => item.section === link).imgs;
    const route = LINKS.find((item) => item.section === link).section;
    setSection(route);
    setData(response);

    // let test =
    console.log(response);
  }, [link]);
  console.log(data);

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
