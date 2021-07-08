import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './CommandCard.scss'

interface CommandCardProps {
  img: string
  nameSurname: string
  post: string
  descr: string
}

export default function CommandCard(props: CommandCardProps) {
  return (
    <Container fluid className="CommandCard p-0">
      <Row className="CommandCard__Row1 m-0">
        <Col className="CommandCard__Col p-0">
          <div className="CommandCard__img">
            <img className="img-fluid" src={props.img} alt={props.nameSurname} />
          </div>
          <h3>{props.nameSurname}</h3>
          <h4>{props.post}</h4>
          <p>{props.descr}</p>
        </Col>
      </Row>
    </Container>
  )
}