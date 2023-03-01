import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/soldier.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const period = 2000;



  

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="fs-1">Seja Bem vindo ao </span>
                <h1>SpaceGames</h1>
                  <p>O gamer sempre aprende que para cada derrota, há uma nova chance. O fim é apenas o recomeço. Eu não escolhi ser gamer, foi essa vida que me escolheu. Quem fala que gamer não tem amigo é porque nunca jogou uma partida online.</p>
                  <button onClick={() => console.log('connect')}>Entre em Contato<ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
            
                <div className="bg-dark" style={{borderRadius: '200px' }}>
                  <img style={{borderRadius: '220px' }} src={headerImg} alt="Header Img"/>
                </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
