import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Config } from '../../../Config/Config'
import { RootState } from '../../../Redux'
import SocialLink from '../../../Redux/interfaces/AdditionalInterfaces/SocialLink'
import SocialLinkType from '../../../Redux/interfaces/AdditionalInterfaces/SocialLinkType'
import MiraclumLogo from '../../../SharedComponents/MiraclumLogo/MiraclumLogo'
import { setModalForm } from '../../../Redux/actions/modal'
import './MainFooter.scss'

interface MainFooterProps {
  setModalForm: (isActive: boolean) => void
}

const MainFooter = (props: MainFooterProps) => {
  const externalLink = (socialLinkType: SocialLinkType): void => {
    const link: SocialLink | undefined = Config.socialLinks.find(link => link.socialLinkType === socialLinkType)

    if (link) {
      window.open(link.url)
    } else (
      console.log('undefined link')
    )
  }

  return (
    <Container fluid className="MainFooter">
      <Container className="MainFooter__Cont p-0">
        <Row className="MainFooter__Row m-0 justify-content-between align-items-start">
          <div className="MainFooter__container d-block" style={{paddingRight: 100}}>
            <MiraclumLogo />
            <div className="MainFooter__text pt-5 d-none d-md-block">Политика конфиденциальности</div>
          </div>

          <div className="MainFooter__container d-block" style={{paddingRight: 100}}>
            <div className="MainFooter__text" onClick={() => props.setModalForm(true)}>Обратный звонок</div>
            <div className="MainFooter__text d-none d-md-block" style={{paddingTop: 62}}>
              <a href={Config.deeSite}>Сайт разработан – deedesign</a>
            </div>
          </div>

          <div className="MainFooter__container d-block">
            <div className="MainFooter__textHeader">Напишите нам </div>
            <div className="MainFooter__img pt-5 d-flex">
              <img className="hvr-grow" src="/icons/footer1.svg" alt="" onClick={() => externalLink('VK')} />
              <img className="hvr-grow" src="/icons/footer2.svg" alt="" onClick={() => externalLink('INSTA')} />
              <img className="hvr-grow" src="/icons/footer3.svg" alt="" />
            </div>
          </div>

          <div className="MainFooter__container d-block">
          <div className="MainFooter__text pb-5 d-block d-md-none">Политика конфиденциальности</div>
            <div className="MainFooter__text d-block d-md-none">
              <a href={Config.deeSite}>Сайт разработан – deedesign</a>
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  )
}

const mapDispatchToProps = {
  setModalForm,
}

const mapStateToProps = (state: RootState) => {
  const modal = state.modal
  return {
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainFooter)