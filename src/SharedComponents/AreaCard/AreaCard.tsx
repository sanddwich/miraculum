import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './AreaCard.scss'

interface AreaCardProps {
  icon: string
  title: string
  onclickHandler: () => void
  bgColor: string
  borderRadius?: string
  width?: string
  isActive: boolean
}

export default function AreaCard(props: AreaCardProps) {
  return (
    <Container fluid className="AreaCard h-100 hvr-grow" onClick={() => props.onclickHandler()}>
      <Row
        className="AreaCard__Row m-0 justify-content-lg-between align-items-center h-100"
        style={{
          backgroundColor: props.bgColor,
          borderRadius: props.borderRadius ? props.borderRadius : '0px',
          width: props.width ? props.width : '100%',
        }}
      >
        <div className="AreaCard__icon">
          <img src={props.icon} alt={props.title} />
        </div>
        <div className="AreaCard__title" style={{ color: props.isActive ? '#FFD467' : '#ffffff' }}>
          {props.title}
        </div>
      </Row>
    </Container>
  )
}
