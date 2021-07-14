import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { scroller, Element } from 'react-scroll'
import { Config } from '../../../../../Config/Config'
import { RootState } from '../../../../../Redux'
import CaseInterface from '../../../../../Redux/interfaces/AdditionalInterfaces/CaseInterface'
import CaseDropDownCard from '../../../../../SharedComponents/CaseDropDownCard/CaseDropDownCard'
import CaseItemCard from '../../../../../SharedComponents/CaseItemCard/CaseItemCard'
import IconButton from '../../../../../SharedComponents/IconButton/IconButton'
import TaskDropDownCard from '../../../../../SharedComponents/TaskDropDownCard/TaskDropDownCard'
import { setModalForm } from '../../../../../Redux/actions/modal'
import './Block10.scss'
import { ModalState } from '../../../../../Redux/interfaces/interfaces'

interface Block10Props {
  modal: ModalState
  setModalForm: (isActive: boolean) => void
}

const Block10 = (props: Block10Props) => {
  const [cases, setCases] = useState<Array<CaseInterface>>(Config.cases)
  const [activeCase, setActiveCase] = useState<CaseInterface | undefined>(() => {
    const activeCaseTmp = Config.cases.find((caseItem) => caseItem.isActive === true)
    return activeCaseTmp
  })

  const getActiveCase = (): CaseInterface | undefined => {
    const activeCaseTmp = cases.find((caseItem) => caseItem.isActive === true)
    return activeCaseTmp
  }

  const caseChange = (caseName: string): void => {
    const casesTmp = cases
    casesTmp.map((caseItem) => {
      if (caseItem.name === caseName) {
        caseItem.isActive = true
      } else {
        caseItem.isActive = false
      }
      return caseItem
    })

    setCases(casesTmp)
    setActiveCase(getActiveCase())

    scrollTo('Block10__cases', 0)
  }

  const scrollTo = (ankorName: string, offset: number): void => {
    scroller.scrollTo(ankorName, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset,
    })
  }

  return (
    <Element name="Block10__cases">
      <Container className="Block10">
        <h1>Выполненные работы</h1>
        {activeCase && (
          <Container key={activeCase.name} fluid className="Block10__case">
            <Row className="Block10__caseRow1 m-0">
              <Col xl={5} lg={12} className="Block10__caseCol1 p-0">
                <CaseDropDownCard
                  icon={activeCase.icon}
                  title={activeCase.name}
                  caseList={cases}
                  caseChange={caseChange}
                />
              </Col>
            </Row>
            <Row className="Block10__caseRow m-0 justify-content-between">
              <Col xl={5} className="Block10__caseCont">
                <CaseItemCard caseItem={activeCase.caseItems[0]} />
              </Col>
              <Col xl={4} className="Block10__caseCont" style={{ paddingLeft: 20 }}>
                <CaseItemCard caseItem={activeCase.caseItems[1]} />
              </Col>
              <Col xl={3} className="Block10__caseCont d-flex justify-content-between align-items-top d-xl-block">
                <CaseItemCard caseItem={activeCase.caseItems[2]} />
                <div className="Block10__separator d-none d-xl-block"></div>
                <CaseItemCard caseItem={activeCase.caseItems[3]} />
              </Col>
            </Row>

            <Container fluid className="Block10__tasks p-0">
              <TaskDropDownCard taskList={activeCase.tasks} />
              <Row className="Block10__caseRow m-0 justify-content-between">
                <Col xl={5} className="Block10__caseCont Block10__caseContSpecial d-none d-xl-block" style={{ padding: 20 }}>
                  <CaseItemCard caseItem={activeCase.caseItems[4]} />
                </Col>
                <Col xl={4} className="Block10__caseCont" style={{ paddingTop: 20, paddingLeft: 20 }}>
                  <CaseItemCard caseItem={activeCase.caseItems[5]} />
                </Col>
                <Col xl={3} className="Block10__caseCont" style={{ paddingTop: 20 }}>
                  <CaseItemCard caseItem={activeCase.caseItems[6]} />
                </Col>
                <Col xl={5} className="Block10__caseCont Block10__caseContSpecial d-block d-xl-none" style={{ padding: 20 }}>
                  <CaseItemCard caseItem={activeCase.caseItems[4]} />
                </Col>
              </Row>
            </Container>

            <Row className="Block10__button m-0 align-items-center">
              <Col lg={6} md={12} className="Block10__buttonCol">
                <p>Нужно провести подробное исследование?</p>
              </Col>
              <Col lg={6} md={12} className="Block10__buttonCol">
                <IconButton
                  bgColor="#6473FB"
                  borderRadius="3px"
                  title="Оставить заявку"
                  height={80}
                  icon="/icons/arrowLeft.svg"
                  bgIconColor="#5B68DF"
                  width={300}
                  onClickHandler={() => props.setModalForm(true)}
                />
              </Col>
            </Row>

            <Container key={activeCase.name} fluid className="Block10__case pt-4 d-block d-lg-none">
              <Row className="Block10__caseRow1 m-0">
                <Col xl={6} lg={12} className="Block10__caseCol1 p-0">
                  <CaseDropDownCard
                    icon={activeCase.icon}
                    title={activeCase.name}
                    caseList={cases}
                    caseChange={caseChange}
                  />
                </Col>
              </Row>
            </Container>
          </Container>
        )}
      </Container>
    </Element>
  )
}

const mapDispatchToProps = {
  setModalForm,
}

function mapStateToProps(state: RootState) {
  const modal = state.modal
  return {
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Block10)