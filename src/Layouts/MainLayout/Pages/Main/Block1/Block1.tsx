import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { RootState } from '../../../../../Redux'
import CircleDot from '../../../../../SharedComponents/CircleDot/CircleDot'
import IconButton from '../../../../../SharedComponents/IconButton/IconButton'
import './Block1.scss'
import { setModalForm } from '../../../../../Redux/actions/modal'
import { ModalState } from '../../../../../Redux/interfaces/interfaces'
import { Element } from 'react-scroll'
import { AnimationOnScroll } from 'react-animation-on-scroll'

interface Block1 {
  modal: ModalState
  setModalForm: (isActive: boolean) => void
}

const Block1 = (props: Block1) => {
  return (
    <Element name="Block1">
      <Container
        fluid
        className="Block1"
        style={{
          backgroundImage: `url("/img/bg.png")`,
        }}
      >
        <Container className="Block1__Content">
          <Row className="Block1__Row1 m-0">
            <Col md={6} xs={12} className="Block1__Left">
              <AnimationOnScroll animateOnce={true} offset={0} animateIn="animate__fadeInLeft">
                <div className="Block1__blurCard d-flex align-items-center">
                  <div>
                    <h1>Маркетинговые исcледования</h1>
                    <p>Проводим исследования предпочтений потребителей и развития продукта</p>
                    <IconButton
                      bgColor="#6473FB"
                      borderRadius="3px"
                      title="Подобрать услугу"
                      height={80}
                      icon="/icons/level.svg"
                      bgIconColor="#5B68DF"
                      width={300}
                      onClickHandler={() => props.setModalForm(true)}
                    />
                  </div>
                </div>
              </AnimationOnScroll>
            </Col>
            <Col md={6} className="Block1__circleDots">
              <div className="Block1__circleDot1">
                <AnimationOnScroll animateOnce={true} offset={0} delay={1000} animateIn="animate__fadeIn">
                  <CircleDot bgCircles="#ffffff" bgCirclesHover="#6473FB" diam={50}>
                    <div id="Miraclum__dotMessage">
                      <div className="Miraclum__dotMessageTitle">12+ лет</div>
                      <div className="Miraclum__dotMessageContent">в исследованиях</div>
                    </div>
                  </CircleDot>
                </AnimationOnScroll>
              </div>
              <div className="Block1__circleDot2">
                <AnimationOnScroll animateOnce={true} offset={0} delay={1400} animateIn="animate__fadeIn">
                  <CircleDot bgCircles="#ffffff" bgCirclesHover="#6473FB" diam={50}>
                    <div id="Miraclum__dotMessage">
                      <div className="Miraclum__dotMessageTitle">30 операторов</div>
                      <div className="Miraclum__dotMessageContent">в собственном CALL-центре</div>
                    </div>
                  </CircleDot>
                </AnimationOnScroll>
              </div>
              <div className="Block1__circleDot3">
                <AnimationOnScroll animateOnce={true} offset={0} delay={1200} animateIn="animate__fadeIn">
                  <CircleDot bgCircles="#ffffff" bgCirclesHover="#6473FB" diam={50}>
                    <div id="Miraclum__dotMessage">
                      <div className="Miraclum__dotMessageTitle">75+ регионов России</div>
                      <div className="Miraclum__dotMessageContent">
                        для проведения исследований и поиска респондентов
                      </div>
                    </div>
                  </CircleDot>
                </AnimationOnScroll>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </Element>
  )
}

const mapDispatchToProps = {
  setModalForm,
}

function mapStateToProps(state: RootState) {
  const modal = state.modal
  return {
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Block1)
