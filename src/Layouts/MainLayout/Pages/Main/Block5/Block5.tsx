import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SolutionCard from '../../../../../SharedComponents/SolutionCard/SolutionCard'
import './Block5.scss'

interface Block5Props {}

export default function Block5(props: Block5Props) {
  return (
    <Container className="Block5">
      <h1>Решения</h1>
      <Row className="Block5__Row1 m-0">
        <Col lg={6} xs={12} className="Block5__Col">
          <SolutionCard title="Customer Journey (CJM)" icon="/icons/arrowDown.svg">
            Путь клиента к покупке для определения проблемных точек в процессе
          </SolutionCard>
        </Col>
        <Col lg={6} xs={12} className="Block5__Col">
          <SolutionCard title="U&A" icon="/icons/arrowDown.svg">
            Исследования привычек и предпочтений (Usage and Attitude)
          </SolutionCard>
        </Col>
      </Row>

      <Row className="Block5__Row1 m-0">
        <Col lg={6} xs={12} className="Block5__Col">
          <SolutionCard title="NPS + CSI" icon="/icons/arrowDown.svg">
            Индекс потребительской лояльности, уровень удовлетворенности
          </SolutionCard>
        </Col>
        <Col lg={6} xs={12} className="Block5__Col">
          <SolutionCard title="Портрет потребителя" icon="/icons/arrowDown.svg">
            Изучение потребителей для развития продукта
          </SolutionCard>
        </Col>
      </Row>

      <Row className="Block5__Row1 m-0">
        <Col lg={6} xs={12} className="Block5__Col">
          <SolutionCard title="Тестирование упаковки" icon="/icons/arrowDown.svg">
            Исследование восприятия упаковки продукта
          </SolutionCard>
        </Col>
        <Col lg={6} xs={12} className="Block5__Col">
          <SolutionCard title="Brand health" icon="/icons/arrowDown.svg">
            Выявление позиций бренда на рынке относительно торговых марок конкурентов, его сильных и слабых сторон
          </SolutionCard>
        </Col>
      </Row>

      <Row className="Block5__Row1 m-0">
        <Col lg={6} xs={12} className="Block5__Col">
          <SolutionCard title="Сопровождение покупки" icon="/icons/arrowDown.svg">
            Изучение поведения покупателей в местах продаж
          </SolutionCard>
        </Col>
        <Col lg={6} xs={12} className="Block5__Col">
          <SolutionCard title="Top of Mind" icon="/icons/arrowDown.svg">
            Изучение узнаваемости бренда среди целевой аудитории, анализ сильных и слабых сторон бренда и конкурентов
          </SolutionCard>
        </Col>
      </Row>

      <div className="MobileHorLineCont" style={{ paddingTop: 100 }}>
        <div className="MobileHorLine"></div>
      </div>
    </Container>
  )
}
