import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { RootState } from '../../Redux'
import { ModalState } from '../../Redux/interfaces/interfaces'
import { setMobileMenu } from '../../Redux/actions/modal'
import './MobileMenu.scss'
import { connect } from 'react-redux'
import { scroller } from 'react-scroll'
import ScrollAnimation from 'react-animate-on-scroll'
import IconButton from '../IconButton/IconButton'

interface MobileMenuProps {
  setMobileMenu: (isActive: boolean) => void
  modal: ModalState
}

interface MobileMenuState {
  messangers: string[]
}

class MobileMenu extends React.Component<MobileMenuProps, MobileMenuState> {
  constructor(props: MobileMenuProps) {
    super(props)
    this.state = {
      messangers: ['https://www.instagram.com/victor__gromov/', 'https://api.whatsapp.com/send?phone=+79171874086'],
    }
  }

  bodyBlock = (): void => {
    document.querySelector('body')?.classList.add('modal-open')
  }

  bodyUnBlock = (): void => {
    document.querySelector('body')?.classList.remove('modal-open')
  }

  closeButton = (): void => {
    this.bodyUnBlock()
    this.props.setMobileMenu(false)
  }

  onClickHandler = (element: number): void => {
    if (this.state.messangers[element]) {
      window.open(this.state.messangers[element])
    }
  }

  scrollTo = (ankorName: string, offset: number): void => {
    scroller.scrollTo(ankorName, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset,
    })

    this.closeButton()
  }

  render() {
    this.props.modal.mobileMenu.isActive ? this.bodyBlock() : this.bodyUnBlock()

    return (
      <Container fluid className="MobileMenu p-0 animated animate__fadeInDownBig">
        <Row className="MobileMenu__oneRow m-0 d-flex justify-content-between align-items-center">
          <div className="MobileMenu__logo p-2">
            <ScrollAnimation animateOnce={true} delay={500} offset={0} animateIn="animate__fadeIn">
              <img className="img-fluid" src="/images/logo.png" alt="" />
            </ScrollAnimation>
          </div>
          <div className="MobileMenu__closeButton">
            <ScrollAnimation animateOnce={true} delay={500} offset={0} animateIn="animate__fadeIn">
              <img src="/icons/close__white.svg" alt="" onClick={() => this.closeButton()} />
            </ScrollAnimation>
          </div>
        </Row>
        <Row className="MobileMenu__twoRow m-0">
          <Col className="MobileMenu__menuBlock p-2">
            <ul style={{ listStyleType: 'none' }}>
              <li onClick={() => this.scrollTo('Block3', 0)}>Методы работы</li>
              <li onClick={() => this.scrollTo('Block5', 0)}>Решения</li>
              <li onClick={() => this.scrollTo('Rating', 0)}>О компании</li>
              <li onClick={() => this.scrollTo('Consulting', 0)}>Кейсы</li>
              <li onClick={() => this.scrollTo('Services', 0)}>call-центр</li>
              <li onClick={() => this.scrollTo('Trust', 0)}>Контакты</li>
            </ul>
          </Col>
        </Row>
        <Row className="MobileMenu__phone m-0 d-flex justify-content-start align-items-center">
          <ScrollAnimation animateOnce={true} delay={500} offset={0} animateIn="animate__fadeIn">
            <div className="MobileMenu__phone d-block">
              <div className="MobileMenu__phoneNumber">
                <a href="tel:88512690339">8 (8512) 69-03-39</a>
              </div>
              <div className="MainHeader__phoneTitle">Обратный звонок</div>
            </div>
          </ScrollAnimation>
        </Row>
        <Row className="MobileMenu__socialLinks m-0">
          <ScrollAnimation animateOnce={true} delay={700} offset={0} animateIn="animate__fadeIn">
            <IconButton
              bgColor="#6473FB"
              borderRadius="3px"
              title="Подобрать услугу"
              height={80}
              icon="/icons/level.svg"
              bgIconColor="#5B68DF"
              width={300}
            />
          </ScrollAnimation>
        </Row>
      </Container>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu)
