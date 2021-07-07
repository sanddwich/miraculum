import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import './SolutionCard.scss'
import OutsideClickHandler from 'react-outside-click-handler'

interface SolutionCardProps {
  title: string
  icon: string
  children?: React.ReactNode
}

export default function SolutionCard(props: SolutionCardProps) {
  const [bounceMessage, setBounceMessage] = useState<boolean>(false)

  return (
    <OutsideClickHandler onOutsideClick={() => setBounceMessage(false)}>
      <Container fluid className="SolutionCard" onClick={() => setBounceMessage(!bounceMessage)}>
        <Row className="SolutionCard__Row1 m-0 d-flex justify-content-between align-items-center">
          <div className="SolutionCard__title">{props.title}</div>
          <div className="SolutionCard__icon">
            <img className="img-fluid" src={props.icon} alt={props.icon} />
          </div>
        </Row>
      </Container>

      {props.children && bounceMessage && (
        <Container fluid className="SolutionCard__dd m-0 d-flex justify-content-center animated animate__fadeInDown">
          {props.children}
        </Container>
      )}
    </OutsideClickHandler>
  )
}
