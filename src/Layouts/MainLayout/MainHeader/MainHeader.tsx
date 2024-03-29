import React from 'react'
import { Container , Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { scroller } from 'react-scroll'
import { RootState } from '../../../Redux'
import { setMobileMenu, setModalForm } from '../../../Redux/actions/modal'
import MiraclumLogo from '../../../SharedComponents/MiraclumLogo/MiraclumLogo'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import './MainHeader.scss'
import ScrollButton from '../../../SharedComponents/ScrollButton/ScrollButton'

interface MainHeaderProps {
  setMobileMenu: (isActive: boolean) => void
  setModalForm: (isActive: boolean) => void
}

const MainHeader = (props: MainHeaderProps) => {
  const scrollTo = (ankorName: string, offset: number): void => {
    scroller.scrollTo(ankorName, {
      duration: 1000,
      delay: 100,
      // smooth: true,
      // offset,
    })
  }

  return (
    <Container fluid className="MainHeader">
      <Container className="MainHeader__Cont">

        <ScrollButton />

        <div className="MainHeader__Row1 m-0 d-flex justify-content-between">
          <NavLink to="/">
            <MiraclumLogo />
          </NavLink>

          <div
            className="MainHeader__burger d-flex d-sm-none justify-content-center align-items-center"
            onClick={() => props.setMobileMenu(true)}
          >
            <img src="/icons/burger.svg" alt="" />
          </div>
          <div className="MainHeader__phoneCont d-none d-sm-block">
            <div className="MainHeader__phone">
              <a href="tel:89170865242">8 (917) 086-52-42</a>
            </div>
            <div className="MainHeader__phoneTitle" onClick={() => props.setModalForm(true)}>
              Обратный звонок
            </div>
          </div>
        </div>

        <div className="MainHeader__phoneNumber m-0 d-sm-none">
          <div className="MainHeader__phone">
            <a href="tel:89170865242" style={{color: '#FFD467'}}>8 (917) 086-52-42</a>
          </div>
        </div>

        <div className="MainHeader__Row2 m-0 d-none d-sm-flex flex-wrap justify-content-start">
          <AnimationOnScroll animateOnce={true} offset={0} animateIn="animate__fadeIn">
            <div className="MainHeader__navbarEl" onClick={() => scrollTo('Block4', 0)}>
              Методы работы
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateOnce={true} offset={0} delay={200} animateIn="animate__fadeIn">
            <div className="MainHeader__navbarEl" onClick={() => scrollTo('Block5', 0)}>
              Решения
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateOnce={true} offset={0} delay={400} animateIn="animate__fadeIn">
            <div className="MainHeader__navbarEl" onClick={() => scrollTo('Block6', 0)}>
              О компании
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateOnce={true} offset={0} delay={600} animateIn="animate__fadeIn">
            <div className="MainHeader__navbarEl" onClick={() => scrollTo('Block10__cases', 0)}>
              Кейсы
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateOnce={true} offset={0} delay={800} animateIn="animate__fadeIn">
            <div className="MainHeader__navbarEl" onClick={() => scrollTo('Block11', 0)}>
              call-центр
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateOnce={true} offset={0} delay={1000} animateIn="animate__fadeIn">
            <div className="MainHeader__navbarEl" onClick={() => scrollTo('Block13', 0)}>
              Контакты
            </div>
          </AnimationOnScroll>
        </div>
      </Container>
    </Container>
  )
}

const mapDispatchToProps = {
  setMobileMenu,
  setModalForm,
}

const mapStateToProps = (state: RootState) => {
  const modal = state.modal
  return {
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader)
