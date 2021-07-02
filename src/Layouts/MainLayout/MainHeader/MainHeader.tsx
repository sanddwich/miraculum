import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { scroller } from 'react-scroll'
import { RootState } from '../../../Redux'
import { setMobileMenu } from '../../../Redux/actions/modal'
import './MainHeader.scss'

interface MainHeaderProps {
  setMobileMenu: (isActive: boolean) => void
}

const MainHeader = (props: MainHeaderProps) => {
  const scrollTo = (ankorName: string, offset: number): void => {
    scroller.scrollTo(ankorName, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset,
    })
  }

  return (
    <Container fluid className="MainHeader">
      <Container className="MainHeader__Cont">
        <Row className="MainHeader__Row1 m-0 d-flex justify-content-between">
          <NavLink to="/">
            <div className="MainHeader__logoCont d-flex justify-content-start">
              <div className="MainHeader__logo">
                <img src="/img/logo.png" alt="" />
              </div>
              <div className="MainHeader__logoText d-block">
                <div className="MainHeader__logoTitle">MIRACULUM</div>
                <div className="MainHeader__logoDescr">research group </div>
              </div>
            </div>
          </NavLink>

          <div
            className="MainHeader__burger d-flex d-sm-none justify-content-center align-items-center"
            onClick={() => props.setMobileMenu(true)}
          >
            <img src="/icons/burger.svg" alt="" />
          </div>
          <div className="MainHeader__phoneCont d-none d-sm-block">
            <div className="MainHeader__phone">
              <a href="tel:88512690339">8 (8512) 69-03-39</a>
            </div>
            <div className="MainHeader__phoneTitle">Обратный звонок</div>
          </div>
        </Row>
        <Row className="MainHeader__Row2 m-0 d-none d-sm-flex justify-content-start">
          <div className="MainHeader__navbarEl" onClick={() => scrollTo('AnkorName', 0)}>
            Методы работы
          </div>
          <div className="MainHeader__navbarEl" onClick={() => scrollTo('AnkorName', 0)}>
            Решения
          </div>
          <div className="MainHeader__navbarEl" onClick={() => scrollTo('AnkorName', 0)}>
            О компании
          </div>
          <div className="MainHeader__navbarEl" onClick={() => scrollTo('AnkorName', 0)}>
            Кейсы
          </div>
          <div className="MainHeader__navbarEl" onClick={() => scrollTo('AnkorName', 0)}>
            call-центр
          </div>
          <div className="MainHeader__navbarEl" onClick={() => scrollTo('AnkorName', 0)}>
            Контакты
          </div>
        </Row>
      </Container>
    </Container>
  )
}

const mapDispatchToProps = {
  setMobileMenu,
}

const mapStateToProps = (state: RootState) => {
  const modal = state.modal
  return {
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader)
