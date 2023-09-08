import { Cards } from "../../components/Cards";
import { Container } from "../../components/Container";

export function Galery() {
  // console.log(window.innerWidth);

  return (
    <Container>
      <Cards
        src="https://lh3.googleusercontent.com/pw/AIL4fc-xo6gLAcz0sIU7haDXZ6ojGlXu6IoQnhT0s4uXF-zmDPg4y85wprIQuIOTCMfmOIVWP8yoAgcsMZ7kH1uQlRoRNSOmghMiCobN1NSa7y2PFz4uJhw3KkCegDQhtct-_T2g1gX8NJ36PHAEEbywWeiz=w659-h879-s-no?authuser=0"
        key={1}
        title="Gravuras"
        to="/galery/gravuras"
        data={false}
      />
      <Cards
        src="https://i.pinimg.com/originals/83/f3/8c/83f38ccb271bc988b2b8d4b20cb22103.jpg"
        key={2}
        title="Pinturas"
        to="/galery/pinturas"
        data={false}
      />

      <Cards
        src="https://lh3.googleusercontent.com/pw/AIL4fc9k8-uIwx4grRADkFPeb0dSfbcTB1VieG8XE6VYVcqDc8IYT4u_HaeA09CQMUmYsaGiY4qrMm2MD_sJth8S_oM-yIAh-sgFjTWFCAM3mQMEwbzpAzt55jJsPmpMgI782zwFgSSLFuWAIBRfsNuGQrKG=w879-h879-s-no?authuser=0"
        key={3}
        title="Fotografias"
        to="/galery/fotografias"
        data={false}
      />
      <Cards
        src="https://lh3.googleusercontent.com/pw/AIL4fc8A5e2RQj4EppIyZyI5-UfnGG3w62W1F52TN0IlX_AQeP7FT7qp0o3PqO2VfraXU1QKdTkhT5J5Fuy2ns05KHolywEQ-VQWu7fAj8DVpfiKoU5qDFzweswnEk39wdEOavQXjYB718DksdMlMpaiD06R=w626-h879-s-no?authuser=0"
        key={4}
        title="Desenhos"
        to="/galery/desenhos"
        data={false}
      />
      <Cards
        src="https://lh3.googleusercontent.com/pw/AIL4fc8OMgTU3CsMVPg600f1CHqjbcjfFwNHJ73UYkYjkai2zUy_YupUfUjSEb_ZBLjKsww4T0DpXgOB1dwFnsT_SftXPiWIaXR1qSHH2vab0nyUntinDxO93fk3fP7-HRGrgq2CM_teTdlR7jfrOcrE7_DH=w1388-h879-s-no?authuser=0"
        key={5}
        title="Tridimensional"
        to="/galery/tridimensional"
        data={false}
      />
    </Container>
  );
}
