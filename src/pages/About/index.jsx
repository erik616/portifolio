import style from "./style.module.css";
import { Container } from "../../components/Container";

export function About() {
  return (
    <Container>
      <div className={style.about_content}>
        <h1 className={style.name}>Adrianne Jhulya da Silva Mendes</h1>
        <div className={style.about}>
          <img
            src="https://lh3.googleusercontent.com/pw/AIL4fc9-MHPEJSvg4dmcks0kvKWlfmShKeIWM9qO345Kegty5Uv1F6rquYoJkac3ON8QyJARcVPcEluBmRCUiQeeTtu1k5m_17tyxiiNO4JD4PwQMPJryij8HX7uFny4D-gZv6eUZ7MmJMlsspfnvXtR1dsy=w659-h879-s-no?authuser=0"
            alt="adrianne jhulya"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          ducimus cumque incidunt fuga nesciunt nihil vitae assumenda placeat,
          numquam doloremque? Dolores commodi dicta nam dolorem, eveniet odio
          expedita sint temporibus!
        </p>
      </div>
    </Container>
  );
}
