import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Config } from '../../../../../Config/Config'
import IconButton from '../../../../../SharedComponents/IconButton/IconButton'
import axios from 'axios'
import './Block12.scss'
import { connect } from 'react-redux'
import { setModalForm, setModalThanks } from '../../../../../Redux/actions/modal'
import { RootState } from '../../../../../Redux'
import { ModalState } from '../../../../../Redux/interfaces/interfaces'
import ReactInputMask from 'react-input-mask'
import LoaderHorizontal from '../../../../../SharedComponents/LoaderHorizontal/LoaderHorizontal'
import { Element } from 'react-scroll'
import { AnimationOnScroll } from 'react-animation-on-scroll'

interface Block12Props {
  modal: ModalState
  setModalForm: (isActive: boolean) => void
  setModalThanks: (isActive: boolean) => void
}

const Block12 = (props: Block12Props) => {
  const [nameField, setNameField] = useState<string>('')
  const [nameError, setNameError] = useState<boolean>(false)
  const [phoneField, setPhoneField] = useState<string>('')
  const [phoneError, setPhoneError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const nameChangeHandler = (value: string) => {
    setNameField(value)
    setNameError(false)
  }

  const phoneChangeHandler = (value: string) => {
    setPhoneField(value)
    setPhoneError(false)
  }

  const phoneValidate = (value: string): boolean => {
    const str = value.match(/\d/g)?.join('')
    return str && str.length === Config.phoneMinLength ? true : false
  }

  const nameValidate = (value: string): boolean => {
    const str = value
      .trim()
      .match(/^[а-яА-ЯёЁ]+$/g)
      ?.join('')
    return str && str.length > Config.nameMinLength ? true : false
  }

  const clickHandler = (): void => {
    !phoneValidate(phoneField) && setPhoneError(true)
    !nameValidate(nameField) && setNameError(true)
    phoneValidate(phoneField) && nameValidate(nameField) && sendMail()
  }

  const sendMail = async (): Promise<any> => {
    setLoading(true)
    const mailSettings = { ...Config.mailSettings, userName: nameField, userPhone: phoneField, siteUrl: Config.url }
    axios
      .post(mailSettings.apiPath, mailSettings)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data)
          props.setModalForm(false)
          props.setModalThanks(true)
        } else {
          console.log('Ошибка отправки сообщения')
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => setLoading(false))
  }

  return (
    <Element name="Block12">
      <AnimationOnScroll animateOnce={true} offset={200} animateIn="animate__fadeInUp">
        <Container fluid className="Block12">
          <Container className="Block12__Cont p-0">
            <h1>Нужно провести исследование?</h1>
            <h4>Оставьте свои контактные данные и мы перезвоним вам самостоятельно</h4>

            <div className="Block12__formFields m-0 d-flex flex-wrap justify-content-start align-items-top">
              <div className="Block12__formFieldCont d-block">
                <AnimationOnScroll animateOnce={true} offset={0} delay={1000} animateIn="animate__fadeIn">
                  <input
                    className="Block12__input"
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={nameField}
                    onChange={(event) => nameChangeHandler(event?.target.value)}
                  />
                  <div className="KisModalForm__imgCont"></div>
                  {nameError && <div className="Block12__inputError">Не корректное заполнение поля</div>}
                </AnimationOnScroll>
              </div>
              <div className="Block12__formFieldCont d-block">
                <AnimationOnScroll animateOnce={true} offset={0} delay={1200} animateIn="animate__fadeIn">
                  <ReactInputMask
                    mask="9 (999) 999-99-99"
                    className={`Block12__input phone `}
                    type="tel"
                    name="phone"
                    placeholder="8 (900) 888-88-88"
                    value={phoneField}
                    onChange={(event) => phoneChangeHandler(event?.target.value)}
                  />
                  <div className="KisModalForm__imgCont">
                    <img src="/icons/flag.svg" alt="" />
                  </div>

                  {phoneError && <div className="Block12__inputError">Не корректное заполнение поля</div>}
                </AnimationOnScroll>
              </div>
              <div className="Block12__formFieldCont">
                <AnimationOnScroll animateOnce={true} offset={0} delay={1400} animateIn="animate__fadeIn">
                  {loading ? (
                    <LoaderHorizontal />
                  ) : (
                    <div className="KisModalForm__formFieldCont">
                      <IconButton
                        bgColor="#FFD467"
                        borderRadius="3px"
                        title="Отправить заявку"
                        height={80}
                        icon="/icons/leftArrowBlack.svg"
                        bgIconColor="#FFC83A"
                        width={300}
                        onClickHandler={() => clickHandler()}
                      />
                    </div>
                  )}
                </AnimationOnScroll>
              </div>
            </div>

            <p>
              Нажимая на кнопку, вы соглашаетесь с{' '}
              <a href={`${Config.url}/politic.pdf`} target="_blank">
                политикой конфиденциальности
              </a>
            </p>
          </Container>
        </Container>
      </AnimationOnScroll>
    </Element>
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

export default connect(mapStateToProps, mapDispatchToProps)(Block12)
