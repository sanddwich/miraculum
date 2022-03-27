import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Block3.scss'
import { Element } from 'react-scroll'
import { AnimationOnScroll } from 'react-animation-on-scroll'

interface Block3Props {}

export default function Block3(props: Block3Props) {
  return (
    <Element name="Block3">
      <Container
        fluid
        className="Block3"
        style={{
          backgroundImage: `url("/img/3_bg.png")`,
        }}
      >
        <Container className="Block3__Cont">
          <div className="MobileHorLineCont d-block d-sm-none">
            <div className="MobileHorLine"></div>
          </div>
          <Row className="Block3__Row m-0">
            <Col sm={4} className="Block3__Left d-flex justify-content-start justify-content-md-between align-items-center">
              <div className="Block3__LeftTitle">Для кого</div>
              <div className="Block3__LeftImg d-flex d-md-block">
                <img className="Block3__icon img-fluid" src="/img/31.svg" alt="" />
              </div>
            </Col>
            <Col sm={8} className="Block3__Right">
              <div className="Block3__list">
                <AnimationOnScroll animateOnce={true} offset={100} animateIn="animate__fadeInRight">
                  <div className="Block3__listEl d-flex justify-content-end">
                    <div className="Block3__listElCont" style={{ width: '100%'}}>
                      Собственников и управляющих действующего бизнеса
                    </div>
                  </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateOnce={true} offset={150} delay={200} animateIn="animate__fadeInRight">
                  <div className="Block3__listEl d-flex justify-content-end">
                    <div className="Block3__listElCont" style={{ width: '80%', backgroundColor: '#333333' }}>
                      Управляющих запуском стартапов
                    </div>
                  </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateOnce={true} offset={150} delay={300} animateIn="animate__fadeInRight">
                  <div className="Block3__listEl d-flex justify-content-end">
                    <div className="Block3__listElCont" style={{ width: '60%' }}>
                      Маркетологов в компании
                    </div>
                  </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateOnce={true} offset={150} delay={400} animateIn="animate__fadeInRight">
                  <div className="Block3__listEl d-flex justify-content-end">
                    <div className="Block3__listElCont" style={{ width: '60%', backgroundColor: '#333333' }}>
                      Исследователей в компании
                    </div>
                  </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateOnce={true} offset={150} delay={500} animateIn="animate__fadeInRight">
                  <div className="Block3__listEl d-flex justify-content-end">
                    <div className="Block3__listElCont" style={{ width: '80%' }}>
                      Продакт-менеджеров и команд в компании
                    </div>
                  </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateOnce={true} offset={150} delay={600} animateIn="animate__fadeInRight">
                  <div className="Block3__listEl d-flex justify-content-end">
                    <div className="Block3__listElCont" style={{ width: '100%', backgroundColor: '#333333' }}>
                      Исследовательских агентств и команд
                    </div>
                  </div>
                </AnimationOnScroll>
              </div>
              <div className="MobileHorLineCont d-block d-sm-none" style={{ paddingTop: 50 }}>
                <div className="MobileHorLine"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </Element>
  )
}
