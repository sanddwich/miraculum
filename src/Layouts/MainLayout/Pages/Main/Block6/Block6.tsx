import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightSquareFill, ArrowLeftSquareFill } from 'react-bootstrap-icons'
// import { connect } from 'react-redux'
import { Config } from '../../../../../Config/Config'
// import { RootState } from '../../../../../Redux'
// import { setModalWindow } from '../../../../../Redux/actions/modal'
// import { ModalState } from '../../../../../Redux/interfaces/interfaces'
import ModalWindow from '../../../../../SharedComponents/ModalWindow/ModalWindow'
import './Block6.scss'
import { Element } from 'react-scroll'

// Import Swiper React components
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay])

// interface Block6Props {
//   setModalWindow: (isActive: boolean) => void
//   modal: ModalState
// }

interface Block6Props {}

const Block6 = (props: Block6Props) => {
  const [letters, setLetters] = useState<number>(5)
  const [modalSlider, setModalSlider] = useState<boolean>(false)
  const [activeSlide, setActiveSlide] = useState<string>(Config.letters[0])
  const [modalActive, setModalActive] = useState<boolean>(false)

  const closeHandler = (): void => {
    setModalActive(false)
  }

  const modalOpen = (slider: boolean = false, activeSlide: string = Config.letters[0]): void => {
    setActiveSlide(activeSlide)
    setModalSlider(slider)
    setModalActive(true)
  }

  return (
    <Element name="Block6">
      <Container className="Block6 p-0">
        {modalActive && modalSlider && (
          <div className="Block6__navigationPaginationCont">
            <div className="Block6__navigationPagination d-flex justify-content-between">
              <div id="Block2__PrewArrow" className="Block2__Arrow">
                <ArrowLeftSquareFill color={`#6473fb`} size={40} />
              </div>
              <div className="Block6__pagination d-flex justify-content-center align-items-center">
                <div className="swiper-pagination"></div>
              </div>
              <div id="Block2__NextArrow" className="Block2__Arrow">
                <ArrowRightSquareFill color={`#6473fb`} size={40} />
              </div>
            </div>
          </div>
        )}

        {modalActive && (
          <ModalWindow closeHandler={() => closeHandler()}>
            {modalSlider ? (
              <Swiper
                loop={false}
                navigation={{
                  nextEl: '#Block2__NextArrow',
                  prevEl: '#Block2__PrewArrow',
                }}
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{
                  delay: 5000,
                }}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination',
                }}
              >
                {Config.letters.map((img, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Container fluid className="p-0 d-flex justify-content-center">
                        <img className="img-fluid" src={img} alt="" />
                      </Container>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            ) : (
              <Container fluid className="p-0 d-flex justify-content-center">
                <img className="img-fluid" src={activeSlide} alt="" />
              </Container>
            )}
          </ModalWindow>
        )}

        <Row className="Block6__Row1 m-0">
          <Col lg={6} xs={12} className="Block6__left p-0">
            <h1>О компании</h1>
            <p>
              <b>MIRACULUM research group</b> – независимое исследовательское агентство, специализирующееся на
              маркетинговых исследованиях для принятия эффективных управленческих решений.
            </p>
            <p>
              <b>MIRACULUM research group</b> реализует полный комплекс исследований, направленных на получение
              разносторонней аналитической информации в сфере изучения продукта, потребителей, клиентов, бренда,
              коммуникаций и развития бизнеса.
            </p>
          </Col>
          <Col lg={6} xs={12} className="Block6__right p-0">
            <h1>Рекомендательные письма</h1>
            <Container fluid className="Block6__letters p-0">
              <Row className="Block6__lettersRow m-0">
                {Config.letters.map((letter, index) => {
                  if (index < letters) {
                    return (
                      <Col xs={4} key={index} className="Block6__letterBlur" onClick={() => modalOpen(false, letter)}>
                        <Container
                          fluid
                          className="Block6__letterBG p-0"
                          style={{ backgroundImage: `url("${letter}")` }}
                        >
                          <div className="Block6__letter"></div>
                        </Container>
                        <div className="Block6__letterImg">
                          <img src="/icons/zoom.svg" alt="" />
                        </div>
                      </Col>
                    )
                  }
                })}
                <Col xs={4} className="Block6__letterBlur" onClick={() => modalOpen(true)}>
                  <div className="Block6__letter lastElement">Смотреть все</div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Element>
  )
}

// const mapDispatchToProps = {
//   setModalWindow,
// }

// function mapStateToProps(state: RootState) {
//   const modal = state.modal
//   return {
//     modal,
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Block6)

export default Block6
