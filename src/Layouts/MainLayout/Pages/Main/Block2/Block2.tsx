import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Element } from 'react-scroll'
import './Block2.scss'
import ScrollAnimation from 'react-animate-on-scroll'

interface Block2Props {}

export default function Block2(props: Block2Props) {
  return (
    <Element name="Block2">
      <Container className="Block2">
        <ScrollAnimation animateOnce={true} offset={150} animateIn="animate__fadeInRight">
          <h1>Что мы делаем?</h1>
        </ScrollAnimation>
        <div className="MobileHorLineCont d-block d-md-none">
          <div className="MobileHorLine"></div>
        </div>
        <Row className="Block2__Row">
          <Col md={6} className="Block2__Left d-flex justify-content-end align-items-center">
            <ScrollAnimation animateOnce={true} offset={150} duration={2} delay={500} animateIn="animate__fadeIn">
              <img className="img-fluid w370" src="/img/21.png" alt="" />
              <img className="img-fluid w0" src="/img/21_mob.png" alt="" />
            </ScrollAnimation>
          </Col>
          <Col md={6} className="Block2__Right">
            <div className="Block2__list">
              <div className="Block2__listEl hvr-grow">
                <span>01.</span> Помогаем компаниям определить себя в «системе координат» своего рынка
              </div>
              <div className="Block2__listEl hvr-grow">
                <span>02.</span> Исследуем пользователей и клиентский опыт
              </div>
              <div className="Block2__listEl hvr-grow">
                <span>03.</span> Находим потенциалы для развития продукта
              </div>
              <div className="Block2__listEl hvr-grow">
                <span>04.</span> Тестируем гипотезы
              </div>
              <div className="Block2__listEl hvr-grow">
                <span>05.</span> Помогаем бизнесу расти на основе аналитики
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Element>
  )
}
