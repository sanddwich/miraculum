import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CommandCard from '../../../../../SharedComponents/CommandCard/CommandCard'
import HorLine from '../../../../../SharedComponents/HorLine/HorLine'
import './Block8.scss'
import { Element } from 'react-scroll'
import { AnimationOnScroll } from 'react-animation-on-scroll'

interface Block8Props {}

export default function Block8(props: Block8Props) {
  return (
    <Element name="Block8">
      <Container fluid className="Block8">
        <Container className="Block8__Cont p-0">
          <div className="Block8__titleMob d-block d-lg-none">
            <h1>Команда MIRACULUM research group</h1>
            <HorLine />
          </div>
          <Row className="Block8__Row1 m-0">
            <Col className="Block8__Col d-none d-lg-flex">
              <AnimationOnScroll animateOnce={true} offset={200} animateIn="animate__zoomIn">
                <div className="Block8__title">
                  <h1>Команда MIRACULUM research group</h1>
                  <HorLine />
                </div>
              </AnimationOnScroll>
            </Col>
            <Col lg={6} sm={12} className="Block8__Col p-0">
              <Container fluid className="p-0">
                <Row className="m-0">
                  <Col sm={6} xs={12} className="Block8__cardCont d-flex justify-content-center">
                    <AnimationOnScroll animateOnce={true} offset={200} animateIn="animate__fadeInRight">
                      <CommandCard
                        img="/img/81.jpg"
                        nameSurname="Кормушин Олег"
                        post="Руководитель"
                        descr="Более 10 лет в исследованиях, серьезный опыт организации и контроля качества полевых и онлайн-исследований в регионах России, основатель профессионального исследовательского онлайн сообщества «Полстеры.рф»"
                      />
                    </AnimationOnScroll>
                  </Col>
                  <Col sm={6} xs={12} className="Block8__cardCont d-flex justify-content-center">
                    <AnimationOnScroll animateOnce={true} offset={200} delay={150} animateIn="animate__fadeInRight">
                      <CommandCard
                        img="/img/82.jpg"
                        nameSurname="Кормушина Юлия"
                        post="Руководитель исследовательских проектов"
                        descr="Более 10 лет в исследованиях, модератор, аналитик, преподаватель исследовательских дисциплин в вузе"
                      />
                    </AnimationOnScroll>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </Element>
  )
}
