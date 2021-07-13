import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CaseItemInterface from '../../Redux/interfaces/AdditionalInterfaces/CaseItemInterface'
import './CaseItemCard.scss'

interface CaseItemCardProps {
  caseItem: CaseItemInterface
}

export default function CaseItemCard(props: CaseItemCardProps) {
  return (
    <Container fluid className="CaseItemCard">
      <Row className="CaseItemCard__Row m-0">
        <Col xs={12} className="CaseItemCard__Col">
          <div className="CaseItemCard__header d-flex align-items-top">
            <div className="CaseItemCard__img">
              <img src={props.caseItem.icon} alt={props.caseItem.title} />
            </div>
            <div className="CaseItemCard__title">{props.caseItem.title}</div>
          </div>
          {props.caseItem.text && <div className="CaseItemCard__text">{props.caseItem.text}</div>}
        </Col>
      </Row>
    </Container>
  )
}
