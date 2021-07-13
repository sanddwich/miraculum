import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Config } from '../../../../../Config/Config'
import IconButton from '../../../../../SharedComponents/IconButton/IconButton'
import './Block12.scss'

interface Block12Props {}

export default function Block12(props: Block12Props) {
  return (
    <Container fluid className="Block12">
      <Container className="Block12__Cont p-0">
        <h1>Нужно провести исследование?</h1>
        <h4>Оставьте свои контактные данные и мы перезвоним вам самостоятельно</h4>

        <Row className="Block12__formFields m-0 justify-content-start align-items-top">
          <div className="Block12__formFieldCont">
            <input className="Block12__input" type="text" name="name" placeholder="Ваше имя" />
            <small className="Block12__inputError"></small>
          </div>
          <div className="Block12__formFieldCont">
            <input className="Block12__input phone" type="text" name="phone" placeholder="8 (900) 888-88-88" />
            <small className="Block12__inputError"></small>
          </div>
          <div className="Block12__formFieldCont">
            <IconButton
              bgColor="#FFD467"
              borderRadius="3px"
              title="Отправить заявку"
              height={80}
              icon="/icons/leftArrowBlack.svg"
              bgIconColor="#FFC83A"
              width={300}
            />
          </div>
        </Row>

        <p>
          Нажимая на кнопку, вы соглашаетесь с{' '}
          <a href={`${Config.url}/politic.pdf`} target="_blank">
            политикой конфиденциальности
          </a>
        </p>
      </Container>
    </Container>
  )
}
