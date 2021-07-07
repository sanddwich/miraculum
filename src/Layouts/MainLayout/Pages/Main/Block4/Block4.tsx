import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MethodCard from '../../../../../SharedComponents/MethodCard/MethodCard'
import './Block4.scss'

interface Block4Props {}

export default function Block4(props: Block4Props) {
  return (
    <Container className="Block4">
      <h1>Методы</h1>
      <Row className="Block4__Row1 m-0">
        <Col lg={6} xs={12} className="Block4__Col">
          <MethodCard bgColor="#3C3C3C" title="Телефонные опросы (CATI)">
            С использованием автоматической случайной генерации телефонных номеров
          </MethodCard>
        </Col>
        <Col lg={6} xs={12} className="Block4__Col">
          <MethodCard bgColor="#3C3C3C" title="Онлайн-фокус-группы">
            Очные групповые дискуссии потребителей под руководством модератора
          </MethodCard>
        </Col>
      </Row>

      <Row className="Block4__Row1 m-0">
        <Col lg={6} xs={12} className="Block4__Col">
          <MethodCard bgColor="#333333" title="Онлайн-опросы (CAWI)">
            Массовые опросы респондентов в интернете
          </MethodCard>
        </Col>
        <Col lg={6} xs={12} className="Block4__Col">
          <MethodCard bgColor="#333333" title="Экспертные интервью">
            Интервью с высококвалифицированными специалистами в исследуемой отрасли
          </MethodCard>
        </Col>
      </Row>

      <Row className="Block4__Row1 m-0">
        <Col lg={6} xs={12} className="Block4__Col">
          <MethodCard bgColor="#3C3C3C" title="Холл-тесты">
            Тестирование свойств продуктов (дегустации), тестирование упаковки
          </MethodCard>
        </Col>
        <Col lg={6} xs={12} className="Block4__Col">
          <MethodCard bgColor="#3C3C3C" title="Глубинные интервью ">
            Индивидуальные, подробные интервью с представителями ЦА
          </MethodCard>
        </Col>
      </Row>

      <Row className="Block4__Row1 m-0">
        <Col lg={6} xs={12} className="Block4__Col">
          <MethodCard bgColor="#333333" title="Фокус-группы">
            Очные групповые дискуссии потребителей под руководством модератора
          </MethodCard>
        </Col>
        <Col lg={6} xs={12} className="Block4__Col">
          <MethodCard bgColor="#333333" title="Mystery Shopping">
            Выявление соответствия уровня качества обслуживания заявляемым стандартам компании
          </MethodCard>
        </Col>
      </Row>

      <div className="MobileHorLineCont" style={{ paddingTop: 100 }}>
        <div className="MobileHorLine"></div>
      </div>
    </Container>
  )
}
