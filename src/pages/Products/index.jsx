import { Container } from "../../components/Container";
import { Cards } from "../../components/Cards";
import { useEffect, useState } from "react";
import { LINKS } from "../../utils/data";

export function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const response = LINKS.find(item => item.section === "produtos").imgs;
    setData(response);
  }, []);
  console.log(data);

  return (
    <Container title="Produtos">
      {data.map((item) => {
        if (item.photos) {
          return (
            <Cards
              src={item.src}
              title={item.section}
              to={`/products/${item.section}`}
              key={item.id}
            />
          );
        }
      })}
    </Container>
  );
}
