import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import ModalWindow from '../../../../../SharedComponents/ModalWindow/ModalWindow'
import './Block13.scss'
import { Element } from 'react-scroll'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Config } from '../../../../../Config/Config'

interface Block13Props {}

const Block13 = (props: Block13Props) => {
  const [showMap, setShowMap] = useState<boolean>(false)

  const mapOpen = (): void => {
    // props.setModalWindow(true)
  }

  return (
    <Element name="Block13">
      <AnimationOnScroll animateOnce={true} offset={200} animateIn="animate__fadeInUp">
        <Container fluid className="Block13">
          {showMap && (
            <ModalWindow closeHandler={() => setShowMap(false)}>
              <Container fluid className="Block13__yandexMap">
                <YMaps>
                  <Map
                    className="Block13__yandexMapCont"
                    // onLoad={() => this.setLoading(false)}
                    defaultState={{ center: [46.35996821670819, 48.06899798147581], zoom: 15 }}
                  >
                    <Placemark geometry={[46.35996821670819, 48.06899798147581]} />
                  </Map>
                </YMaps>
              </Container>
            </ModalWindow>
          )}
          <Container className="Block13__Cont p-0">
            <h1>Контакты</h1>
            <Row className="Block13__Row m-0">
              <Col lg={6} className="Block13__content">
                <Container fluid className="p-0">
                  {/* <h6>Местонахождение</h6>
                  <Row className="Block13__iconText m-0 align-items-top justify-content-start">
                    <Col xs={2} className="p-0">
                      <AnimationOnScroll animateOnce={true} offset={0} delay={400} animateIn="animate__zoomIn">
                        <img src="/icons/yellowMapPick.svg" alt="" />
                      </AnimationOnScroll>
                    </Col>
                    <Col xs={10} className="p-0 Block13__iconTextTitle">
                      г. Астрахань, ул. Минусинская, 8, литер Д, офис 333
                    </Col>
                  </Row> */}
                  <h6>Контактный телефон</h6>
                  <Row className="Block13__iconText m-0 align-items-top justify-content-start">
                    <Col xs={2} className="p-0">
                      <AnimationOnScroll animateOnce={true} offset={0} delay={700} animateIn="animate__zoomIn">
                        <img src="/icons/yellowPhone.svg" alt="" />
                      </AnimationOnScroll>
                    </Col>
                    <Col xs={10} className="p-0 Block13__iconTextTitle" style={{ fontSize: 24, fontWeight: 600 }}>
                      <a href="tel:89170865242">8 (917) 086-52-42</a>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col lg={6} className="Block13__map p-0 d-flex justify-content-center align-items-center">
                <Container fluid className="p-0">
                  <h6>Почта</h6>
                  <Row className="Block13__iconText m-0 align-items-top justify-content-start">
                    <Col xs={2} className="p-0">
                      <AnimationOnScroll animateOnce={true} offset={0} delay={1000} animateIn="animate__zoomIn">
                        <img src="/icons/ycall.svg" alt="" />
                      </AnimationOnScroll>
                    </Col>
                    <Col xs={10} className="p-0 Block13__iconTextTitle" style={{ fontSize: 24, fontWeight: 600 }}>
                      <a href={`mailto:${Config.mailSettings.recipientMail}`}>{Config.mailSettings.recipientMail}</a>
                    </Col>
                  </Row>
                </Container>
                {/* <Container fluid className="Block13__mapBG p-0" onClick={() => setShowMap(true)}>
                  <Container
                    fluid
                    className="p-0 Block13__mapBlur"
                    style={{ backgroundImage: `url("/img/blurMap.png")` }}
                  ></Container>
                  <Container fluid className="p-0 Block13__mapZoom">
                    <img src="/icons/zoom.svg" alt="" />
                  </Container>
                </Container> */}
              </Col>
            </Row>
          </Container>
        </Container>
      </AnimationOnScroll>
    </Element>
  )
}

export default Block13
