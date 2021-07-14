import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import IconButton from '../../../../../SharedComponents/IconButton/IconButton'
import './Block11.scss'
import { Element } from 'react-scroll'

interface Block11Props {}

export default function Block11(props: Block11Props) {
  return (
    <Element name="Block11">
      <Container className="Block11">
        <Row className="Block11_Cont m-0">
          <Col lg={6} className="Block11__content">
            <h1>Собственный call-центр</h1>

            <img className="img-fluid d-flex d-lg-none" src="/img/11_1.png" alt="" style={{ paddingBottom: 50 }} />

            <p>
              Компактность нашего CATI-центра позволяет избежать “фабричного” и формализованного подхода в работе,
              исключить “слепую погоню за количеством”, способствует более пристальному вниманию к качеству работы,
              позволяет решать проблемы вовремя!
            </p>
            <IconButton
              bgColor="#6473FB"
              borderRadius="3px"
              title="Открыть презентацию"
              height={80}
              icon="/icons/11_1.svg"
              bgIconColor="#5B68DF"
              width={355}
            />
          </Col>
          <Col lg={6} className="Block11__img p-0 d-none d-lg-flex align-items-center">
            <img className="img-fluid" src="/img/11_1.png" alt="" />
          </Col>
        </Row>
      </Container>
    </Element>
  )
}
