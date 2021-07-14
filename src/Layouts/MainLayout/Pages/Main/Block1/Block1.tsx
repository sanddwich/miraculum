import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { RootState } from '../../../../../Redux'
import CircleDot from '../../../../../SharedComponents/CircleDot/CircleDot'
import IconButton from '../../../../../SharedComponents/IconButton/IconButton'
import './Block1.scss'
import { setModalForm, setModalThanks } from '../../../../../Redux/actions/modal'
import { ModalState } from '../../../../../Redux/interfaces/interfaces'

interface Block1 {
  modal: ModalState
  setModalForm: (isActive: boolean) => void
  setModalThanks: (isActive: boolean) => void
}

const Block1 = (props: Block1) => {
  return (
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
            <div className="Block1__blurCard d-flex align-items-center">
              <div>
                <h1>Маркетинговые иследования</h1>
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
          </Col>
          <Col md={6} className="Block1__circleDots">
            <div className="Block1__circleDot1">
              <CircleDot bgCircles="#ffffff" bgCirclesHover="#6473FB" diam={50}>
                <div id="Miraclum__dotMessage">
                  <div className="Miraclum__dotMessageTitle">message1__Title</div>
                  <div className="Miraclum__dotMessageContent">message1</div>
                </div>
              </CircleDot>
            </div>
            <div className="Block1__circleDot2">
              <CircleDot bgCircles="#ffffff" bgCirclesHover="#6473FB" diam={50}>
                <div id="Miraclum__dotMessage">
                  <div className="Miraclum__dotMessageTitle">30 операторов</div>
                  <div className="Miraclum__dotMessageContent">в собственном CALL-центре</div>
                </div>
              </CircleDot>
            </div>
            <div className="Block1__circleDot3">
              <CircleDot bgCircles="#ffffff" bgCirclesHover="#6473FB" diam={50}>
                <div id="Miraclum__dotMessage">
                  <div className="Miraclum__dotMessageTitle">message3__Title</div>
                  <div className="Miraclum__dotMessageContent">message3</div>
                </div>
              </CircleDot>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

const mapDispatchToProps = {
  setModalForm,
  setModalThanks,
}

function mapStateToProps(state: RootState) {
  const modal = state.modal
  return {
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Block1)
