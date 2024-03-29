import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import './ModalWindow.scss'

interface ModalWindowProps {
  children?: React.ReactNode
  title?: string
  closeHandler: () => void
}

const ModalWindow = (props: ModalWindowProps) => {
  useEffect(() => {
    bodyBlock()
  }, [])

  const bodyBlock = (): void => {
    document.querySelector('body')?.classList.add('modal-open')
  }

  const bodyUnBlock = (): void => {
    document.querySelector('body')?.classList.remove('modal-open')
  }

  const closeButtonHandler = (): void => {
    bodyUnBlock()
    props.closeHandler()
  }

  return (
    <div className="ModalWindow">
      <div className="ModalWindow__container animated animate__fadeInUpBig">
        <Container fluid className="ModalWindow__header p-0">
          <Row className="m-0 h-100">
            <Col sm={10} xs={9} className="ModalWindow__headerTitle d-flex align-items-center">
              {props.title && props.title}
            </Col>
            <Col sm={2} xs={3} className="ModalWindow__close d-flex justify-content-end align-items-center">
              <Icon.XCircleFill width={35} height={35} fill={`#5e5e5e`} onClick={() => closeButtonHandler()} />
            </Col>
          </Row>
        </Container>
        <Container fluid className="ModalWindow__body d-flex align-items-center justify-content-start">
          {props.children}
        </Container>
      </div>
    </div>
  )
}

export default ModalWindow
