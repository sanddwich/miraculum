import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { RootState } from '../../Redux'
import MainBody from './MainBody/MainBody'
import MainFooter from './MainFooter/MainFooter'
import MainHeader from './MainHeader/MainHeader'
import './MainLayout.scss'
import Main from './Pages/Main/Main'
import Second from './Pages/Second/Second'
import { setModalForm, setModalThanks } from '../../Redux/actions/modal'
import { ModalState } from '../../Redux/interfaces/interfaces'
import ModalWindow from '../../SharedComponents/ModalWindow/ModalWindow'
import IconButton from '../../SharedComponents/IconButton/IconButton'
import { Config } from '../../Config/Config'
import ReactInputMask from 'react-input-mask'
import axios from 'axios'
import LoaderHorizontal from '../../SharedComponents/LoaderHorizontal/LoaderHorizontal'

interface MainLayoutProps {
  modal: ModalState
  setModalForm: (isActive: boolean) => void
  setModalThanks: (isActive: boolean) => void
}

const MainLayout = (props: MainLayoutProps) => {
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

    // props.setModalForm(false)
    // props.setModalThanks(true)
  }

  return (
    <Container fluid className="MainLayout p-0">
      {props.modal.modalForm.isActive && (
        <Container fluid className="KisModalForm p-0">
          <ModalWindow closeHandler={() => props.setModalForm(false)}>
            <Container fluid className="KisModalForm__content p-0">
              <h1>Оставьте заявку</h1>
              <h6>Мы свяжемся с вами и ответим на все ваши вопросы</h6>
              <div className="KisModalForm__formFieldCont">
                <input
                  className="KisModalForm__input"
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={nameField}
                  onChange={(event) => nameChangeHandler(event?.target.value)}
                />
                <div className="KisModalForm__imgCont">
                  <img src="/icons/men.svg" alt="" />
                </div>
                {nameError && <small className="KisModalForm__inputError">Не корректное заполнение поля</small>}
              </div>
              <div className="KisModalForm__formFieldCont">
                <ReactInputMask
                  mask="9 (999) 999-99-99"
                  className={`KisModalForm__input `}
                  type="tel"
                  name="phone"
                  placeholder="8 (900) 888-88-88"
                  value={phoneField}
                  onChange={(event) => phoneChangeHandler(event?.target.value)}
                />
                <div className="KisModalForm__imgCont">
                  <img src="/icons/phone.svg" alt="" />
                </div>
                {phoneError && <small className="KisModalForm__inputError">Не корректное заполнение поля</small>}
              </div>

              {loading ? (
                <LoaderHorizontal />
              ) : (
                <div className="KisModalForm__formFieldCont">
                  <IconButton
                    bgColor="#6473FB"
                    borderRadius="3px"
                    title="Отправить заявку"
                    height={70}
                    width={280}
                    onClickHandler={() => clickHandler()}
                  />
                </div>
              )}

              <p>
                Нажимая кнопку “Отправить” даю свое согласие на обработку{' '}
                <a href={`${Config.url}/politic.pdf`} target="_blank">
                  персональных данных
                </a>
              </p>
            </Container>
          </ModalWindow>
        </Container>
      )}

      {props.modal.modalThanks.isActive && (
        <Container fluid className="KisModalThanks p-0">
          <ModalWindow closeHandler={() => props.setModalThanks(false)}>
            <Container fluid className="KisModalThanks__content p-0">
              <h1 className="text-center" style={{ padding: 30, paddingTop: 0 }}>
                Спасибо за заявку!
              </h1>
              <p className="text-center" style={{ padding: 30, paddingTop: 0 }}>
                В ближайшее время мы свяжемся с вами
              </p>
              <div className="KisModalThanks__button d-flex justify-content-center">
                <IconButton
                  bgColor="#6473FB"
                  borderRadius="3px"
                  title="Вернуться на сайт"
                  height={70}
                  width={280}
                  onClickHandler={() => {
                    props.setModalThanks(false)
                    document.querySelector('body')?.classList.remove('modal-open')
                  }}
                />
              </div>
            </Container>
          </ModalWindow>
        </Container>
      )}

      <MainHeader />
      <MainBody>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/second" exact component={Second} />

          <Redirect to="/" />
        </Switch>
      </MainBody>

      <MainFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)
