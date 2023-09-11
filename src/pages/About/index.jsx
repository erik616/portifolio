import style from "./style.module.css";
import { Container } from "../../components/Container";

export function About() {
  return (
    <Container>
      <div className={style.about_content}>
        <div className={style.about}>
          <img src="https://lh3.googleusercontent.com/pw/AIL4fc9-MHPEJSvg4dmcks0kvKWlfmShKeIWM9qO345Kegty5Uv1F6rquYoJkac3ON8QyJARcVPcEluBmRCUiQeeTtu1k5m_17tyxiiNO4JD4PwQMPJryij8HX7uFny4D-gZv6eUZ7MmJMlsspfnvXtR1dsy=w659-h879-s-no?authuser=0" />
          <h1>Adrianne Jhulya da Silva Mendes</h1>
          <p>
            Sou natural de Janaúba, Minas Gerais, nascida em 13/01/2003, me
            formei em técnico em informática para Internet Integrado ao Ensino
            Médio pelo IFNMG e atualmente sou estudante de Artes Visuais na
            Universidade Federal de Uberlândia. Sempre fui apaixonada por tudo
            que envolve arte, gostava de desenhar desde a infância e comecei a
            pintar aos 15 anos para um projeto da minha turma do ensino médio,
            sinto que com o passar do tempo evolui bastante, tanto na questão
            técnica quanto em minha poética artística.
          </p>
        </div>
        <p>
          Tenho afinidade e atração pela relação do corpo e da natureza e as
          várias vertentes ligadas à essas temáticas, geralmente faço
          autorepresentações e explicito coisas que me incomodam ou me fazem
          pensar dentro da sociedade, em relação ao corpo feminino e os padrões
          de beleza que nos é impostos desde muito novas, com isso em mente
          reproduzo partes desse corpo e às naturalizo, tanto trazendo a tona
          essas questões quanto comparando com as formas e texturas naturais.
          Além disso, as vertentes da natureza em si ou destruição dela também
          me movem, principalmente falando do cerrado, então em alguns trabalhos
          trago um testaque para essa vegetação ou dentucio problemas causados
          pelo homem, como o desmatamento e as queimadas.
        </p>
        <p>
          Nesse meio tempo que estive na universidade tive a oportunidade de
          participar de algumas exposições e também curadoria, montando a
          expografia e fazendo intermédio entre os artistas e a exposição
          juntamente ao docente responsável. Ademais fui bolsista do projeto de
          extensão "Cê, Cererê, Cecê" onde ilustrei, à mão, com pintura e também
          edição de fotos no photoshop, dois livros voltados para o público
          infantil de Ituiutaba-MG, tratando de questões culturais da região,
          eles ainda não foram publicados oficialmente, mas logo estarão
          disponíveis para a apreciação.
        </p>
        <p>
          Para além das minhas produções acadêmicas, também recebo encomendas
          personalizadas ou não, feitas com pintura ou gravura, de quadros para
          decoração ou até presente e ecobags que além de serem bastante
          estilosas, são ecológicas, pensadas principalmente para reduzir o
          consumo de plástico.
        </p>
      </div>
    </Container>
  );
}
