import React from 'react'
import { Container } from 'react-bootstrap'
import './HorLine.scss'

interface HorLineProps {}

export default function HorLine(props: HorLineProps) {
  return (
    <Container fluid className="HorLine p-0">
      <div className="HorLineCont"></div>
    </Container>
  )
}
