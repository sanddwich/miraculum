import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Config } from '../../../../../Config/Config'
import './Block7.scss'
import { Element } from 'react-scroll'
import ScrollAnimation from 'react-animate-on-scroll'

interface Block7Props {}

export default function Block7(props: Block7Props) {
  return (
    <Element name="Block7">
      <Container fluid className="Block7">
        <Container className="Block7__Cont p-0">
          <h1>Наши клиенты</h1>
          <Row className="Block7__Row1 m-0 justify-content-center justify-content-md-between align-items-center">
            {Config.partners.map((partner, index) => {
              return (
                <div key={index} className="Block7__partner">
                  <ScrollAnimation animateOnce={true} offset={200} delay={index * 150} animateIn="animate__fadeIn">
                    <img className="img-fluid" src={partner.img} alt={partner.name} />
                  </ScrollAnimation>
                </div>
              )
            })}
          </Row>
        </Container>
      </Container>
    </Element>
  )
}
