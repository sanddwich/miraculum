import React from 'react'
import { Container } from 'react-bootstrap'
import './MiraclumLogo.scss'

interface MiraclumLogoProps {}

export default function MiraclumLogo(props: MiraclumLogoProps) {
  return (
    <Container fluid className="MiraclumLogo p-0">
      <div className="MainHeader__logoCont d-flex justify-content-start">
        <div className="MainHeader__logo">
          <img src="/img/logo.png" alt="" />
        </div>
        <div className="MainHeader__logoText d-block">
          <div className="MainHeader__logoTitle">MIRACULUM</div>
          <div className="MainHeader__logoDescr">research group </div>
        </div>
      </div>
    </Container>
  )
}