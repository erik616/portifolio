import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { LINKS } from "../../utils/data";

export function Xilo() {
  const gravuras = LINKS[0];

  return (
    <Container title={gravuras.section}>
      {gravuras.imgs.map((item) => (
        <Card
          data={item}
          key={item.id}
          photos={false}
          src={item.src}
          title={item.title}
          to={false}
        />
      ))}
    </Container>
  );
}
