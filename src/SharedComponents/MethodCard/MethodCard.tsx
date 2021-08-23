import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import './MethodCard.scss'
import OutsideClickHandler from 'react-outside-click-handler'

interface MethodCardProps {
  title: string
  bgColor: string
  children?: React.ReactNode
}

export default function MethodCard(props: MethodCardProps) {
  const [bounceMessage, setBounceMessage] = useState<boolean>(false)

  return (
    <OutsideClickHandler onOutsideClick={() => setBounceMessage(false)}>
      <Container fluid className="MethodCard p-0" style={{ backgroundColor: props.bgColor }}>
        {props.children && bounceMessage && (
          <Row className="MethodCard__Row2 m-0 d-flex justify-content-center">
            <div className="MethodCard__bounceMessageCont">
              <div className="MethodCard__bounceMessage animated animate__fadeInUp">{props.children}</div>
            </div>
          </Row>
        )}
        <Row className="MethodCard__Row1 m-0 d-flex justify-content-between align-items-center">
          <div className="MethodCard__title">{props.title}</div>
          <div className="MethodCard__icon" onMouseEnter={() => setBounceMessage(true)} onMouseLeave={() => setBounceMessage(false)}>
            ?
          </div>
        </Row>
      </Container>
    </OutsideClickHandler>
  )
}
