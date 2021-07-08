import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CommandCard from '../../../../../SharedComponents/CommandCard/CommandCard'
import HorLine from '../../../../../SharedComponents/HorLine/HorLine'
import './Block8.scss'

interface Block8Props {}

export default function Block8(props: Block8Props) {
  return (
    <Container fluid className="Block8">
      <Container className="Block8__Cont p-0">
        <div className="Block8__titleMob d-block d-lg-none">
          <h1>Команда MIRACULUM research group</h1>
          <HorLine />
        </div>
        <Row className="Block8__Row1 m-0">
          <Col className="Block8__Col d-none d-lg-flex">
            <div className="Block8__title">
              <h1>Команда MIRACULUM research group</h1>
              <HorLine />
            </div>
          </Col>
          <Col lg={6} sm={12} className="Block8__Col p-0">
            <Container fluid className="p-0">
              <Row className="m-0">
                <Col sm={6} xs={12} className="Block8__cardCont d-flex justify-content-center">
                  <CommandCard
                    img="/img/81.jpg"
                    nameSurname="Кормушин Олег"
                    post="Руководитель"
                    descr="Более 10 лет в исследованиях, серьезный опыт организации и контроля качества полевых и онлайн-исследований в регионах России, основатель профессионального исследовательского онлайн сообщества «Полстеры.рф»"
                  />
                </Col>
                <Col sm={6} xs={12} className="Block8__cardCont d-flex justify-content-center">
                  <CommandCard
                    img="/img/82.jpg"
                    nameSurname="Кормушина Юлия"
                    post="Руководитель исследовательских проектов"
                    descr="Более 10 лет в исследованиях, модератор, аналитик, преподаватель исследовательских дисциплин в вузе"
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
