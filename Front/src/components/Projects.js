import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Battlefield™ 2042",
      description: "  É um jogo de tiro em primeira pessoa que marca o retorno à emblemática guerra total da franquia. Em um futuro próximo, num mundo transformado pela desordem, adapte-se a campos de batalha dinâmicos para superá-los com a ajuda do seu pelotão e de um arsenal de ponta.",
      imgUrl: projImg1,
    },
    {
      title: "Ghost of Tsushima",
      description: "A história acompanha Jin Sakai, um samurai que precisa proteger a Ilha de Tsushima durante a primeira invasão mongol do Japão. Ele se vê dividido entre escolher seguir o código do guerreiro para lutar honradamente ou usar métodos práticos e desonrosos para subjugar os mongóis.",
      imgUrl: projImg2,
    },
    {
      title: "Resident Evil Village",
      description: "Chris Redfield é um herói clássico da série Resident Evil, mas a aparição dele em Resident Evil Village está envolvida em motivos sinistros. Uma hora de novos adversários, habitando a enigmática vila, caçarão Ethan e atrapalharão cada movimento que ele fizer enquanto tenta entender o novo pesadelo que está vivendo.",
      imgUrl: projImg3,
    },
    {
      title: "Grand Theft Auto V",
      description: "O jogo se passa no estado ficcional de San Andreas, com a história da campanha um jogador seguindo três criminosos e seus esforços para realizarem assaltos sob a pressão de uma agência governamental. O mundo aberto permite que os jogadores naveguem livremente pelas áreas rurais e urbanas de San Andreas.",
      imgUrl: projImg4,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Games da Semana</h2>
                <p>A Space Games Store oferece quatro jogos grátis toda semana. Aproveite ofertas exclusivas. Baixe jogos gratuito agora mesmo!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
