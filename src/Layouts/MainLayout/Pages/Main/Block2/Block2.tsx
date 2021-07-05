import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Block2.scss'

interface Block2Props {}

export default function Block2(props: Block2Props) {
  return (
    <Container className="Block2">
      <h1>Что мы делаем?</h1>
      <div className="MobileHorLineCont d-block d-md-none">
        <div className="MobileHorLine"></div>
      </div>
      <Row className="Block2__Row">
        <Col md={6} className="Block2__Left d-flex justify-content-end align-items-center">
          <img className="img-fluid" src="/img/21.png" alt="" />
        </Col>
        <Col md={6} className="Block2__Right">
          <div className="Block2__list">
            <div className="Block2__listEl">
              <span>01.</span> Помогаем компаниям определить себя в «системе координат» своего рынка
            </div>
            <div className="Block2__listEl">
              <span>02.</span> Исследуем пользователей и клиентский опыт
            </div>
            <div className="Block2__listEl">
              <span>03.</span> Находим потенциалы для развития продукта
            </div>
            <div className="Block2__listEl">
              <span>04.</span> Тестируем гипотезы
            </div>
            <div className="Block2__listEl">
              <span>05.</span> Помогаем бизнесу расти на основе аналитики
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
