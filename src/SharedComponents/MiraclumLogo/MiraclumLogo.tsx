import React from 'react'
import { Container } from 'react-bootstrap'
import './MiraclumLogo.scss'
import ScrollAnimation from 'react-animate-on-scroll'

interface MiraclumLogoProps {}

export default function MiraclumLogo(props: MiraclumLogoProps) {
  return (
    <Container fluid className="MiraclumLogo p-0">
      <div className="MainHeader__logoCont d-flex justify-content-start">
        <div className="MainHeader__logo">
          <ScrollAnimation animateOnce={false} offset={0} duration={1} animateIn="animate__flipInY">
            <img src="/img/logo.png" alt="" />
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateOnce={false} offset={0} duration={1.5} animateIn="animate__fadeIn">
          <div className="MainHeader__logoText d-block">
            <div className="MainHeader__logoTitle">MIRACULUM</div>
            <div className="MainHeader__logoDescr">research group </div>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  )
}
