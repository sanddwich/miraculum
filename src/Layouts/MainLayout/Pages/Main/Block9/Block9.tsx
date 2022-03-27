import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AreaCard from '../../../../../SharedComponents/AreaCard/AreaCard'
import './Block9.scss'
import { Element } from 'react-scroll'
import { AnimationOnScroll } from 'react-animation-on-scroll'

interface Block9Props {}

interface AreaCardProps {
  title: string
  icon: string
  isActive: boolean
  bgColor: string
  borderRadius?: string
  width?: string
  colWidth: number
  img: string
}

export default function Block9(props: Block9Props) {
  const [areaCards, setAreaCards] = useState<Array<AreaCardProps>>([
    {
      icon: '/icons/91.svg',
      title: 'Строительство / Девелопмент',
      isActive: true,
      bgColor: '#333333',
      borderRadius: '4px',
      colWidth: 7,
      img: '/img/91.png',
    },
    {
      icon: '/icons/92.svg',
      title: 'HoReCa',
      isActive: false,
      bgColor: '#333333',
      borderRadius: '4px',
      colWidth: 5,
      img: '/img/92.png',
    },
    {
      icon: '/icons/93.svg',
      title: 'Розничная торговля (FMCG, DIY (товары для дома и дачи), аптеки)',
      isActive: false,
      bgColor: '#3C3C3C',
      borderRadius: '4px',
      colWidth: 7,
      img: '/img/97.png',
    },
    {
      icon: '/icons/94.svg',
      title: 'Частная медицина',
      isActive: false,
      bgColor: '#3C3C3C',
      borderRadius: '4px',
      colWidth: 5,
      img: '/img/94.png',
    },
    {
      icon: '/icons/95.svg',
      title: 'Электоральные исследования',
      isActive: false,
      bgColor: '#333333',
      borderRadius: '4px',
      colWidth: 7,
      img: '/img/95.png',
    },
    {
      icon: '/icons/96.svg',
      title: 'Связь / Телеком',
      isActive: false,
      bgColor: '#333333',
      borderRadius: '4px',
      colWidth: 5,
      img: '/img/96.png',
    },
  ])

  const getActiveCardImage = (): string | undefined => {
    return areaCards.find((card) => card.isActive === true)?.img
  }

  const setActiveAreaCadr = (id: number): void => {
    const tmpAreaCards: AreaCardProps[] = areaCards.map((card) => {
      card.isActive = false
      return card
    })
    tmpAreaCards[id].isActive = true
    setAreaCards(tmpAreaCards)
  }

  const onClickHandler = (id: number): void => {
    setActiveAreaCadr(id)
  }

  return (
    <Element name="Block9">
      <AnimationOnScroll animateOnce={true} offset={200} animateIn="animate__fadeInUp">
        <Container fluid className="Block9 p-0 d-none d-lg-block">
          <Container className="Block9__Cont">
            <Row className="Block9__Row1 m-0">
              <Col lg={5} className="Block9__title p-0">
                <h1>С какими нишами мы работаем</h1>
              </Col>
            </Row>
            <Row className="Block9__Row2 m-0">
              <Col lg={8} className="Block9__left p-0">
                <Container fluid className="p-0">
                  <Row className="m-0">
                    {areaCards.map((card, index) => {
                      return (
                        <Col key={index} md={card.colWidth} className="Block9__cardCont">
                          <AreaCard
                            title={card.title}
                            bgColor={card.bgColor}
                            icon={card.icon}
                            isActive={card.isActive}
                            borderRadius={card.borderRadius}
                            onclickHandler={() => onClickHandler(index)}
                          />
                        </Col>
                      )
                    })}
                  </Row>
                </Container>
              </Col>
              <Col lg={4} className="Block9__right p-0 d-flex justify-content-center align-items-center">
                {getActiveCardImage() && (
                  <div key={getActiveCardImage()} className="Block9__fadeImg animated animate__fadeIn">
                    <img className="img-fluid" src={getActiveCardImage()} alt="" />
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        </Container>
      </AnimationOnScroll>
    </Element>
  )
}
