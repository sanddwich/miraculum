import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Config } from '../../../../../Config/Config'
import './Block7.scss'
import { Element } from 'react-scroll'
import { AnimationOnScroll } from 'react-animation-on-scroll'

interface Block7Props {}

export default function Block7(props: Block7Props) {
  return (
    <Element name="Block7">
      <Container fluid className="Block7">
        <Container className="Block7__Cont p-0">
          <h1>Наши клиенты</h1>
          <div className="Block7__Row1 m-0 d-flex flex-wrap justify-content-center align-items-center">
            {Config.partners.map((partner, index) => {
              return (
                <div key={index} className="Block7__partner">
                  <AnimationOnScroll animateOnce={true} offset={200} delay={index * 150} animateIn="animate__fadeIn">
                    <img className="img-fluid" src={partner.img} alt={partner.name} />
                  </AnimationOnScroll>
                </div>
              )
            })}
          </div>
        </Container>
      </Container>
    </Element>
  )
}
