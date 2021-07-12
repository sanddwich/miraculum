import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { scroller, Element } from 'react-scroll'
import { Config } from '../../../../../Config/Config'
import CaseInterface from '../../../../../Redux/interfaces/AdditionalInterfaces/CaseInterface'
import TaskInterface from '../../../../../Redux/interfaces/AdditionalInterfaces/TaskInterface'
import CaseDropDownCard from '../../../../../SharedComponents/CaseDropDownCard/CaseDropDownCard'
import CaseItemCard from '../../../../../SharedComponents/CaseItemCard/CaseItemCard'
import IconButton from '../../../../../SharedComponents/IconButton/IconButton'
import TaskDropDownCard from '../../../../../SharedComponents/TaskDropDownCard/TaskDropDownCard'
import TaskItemCard from '../../../../../SharedComponents/TaskItemCard/TaskItemCard'
import './Block10.scss'

interface Block10Props {}

export default function Block10(props: Block10Props) {
  const [cases, setCases] = useState<Array<CaseInterface>>(Config.cases)
  const [activeCase, setActiveCase] = useState<CaseInterface | undefined>(() => {
    const activeCaseTmp = Config.cases.find((caseItem) => caseItem.isActive === true)
    return activeCaseTmp
  })
  const [activeTask, setActiveTask] = useState<TaskInterface | undefined>(() => {
    let activeTaskTmp: TaskInterface | undefined = undefined
    if (activeCase) {
      activeTaskTmp = activeCase.tasks.find((taskItem) => taskItem.isActive === true)
    }
    return activeTaskTmp
  })

  const getActiveCase = (): CaseInterface | undefined => {
    const activeCaseTmp = cases.find((caseItem) => caseItem.isActive === true)
    return activeCaseTmp
  }

  const getActiveTask = (): TaskInterface | undefined => {
    const activeTaskTmp = activeCase?.tasks.find((taskItem) => taskItem.isActive === true)
    return activeTaskTmp
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
    setActiveTask(getActiveCase()?.tasks[0])

    scrollTo('Block10__cases', 0)
  }

  const taskChange = (taskName: string): void => {
    const activeCaseTmp = activeCase
    activeCaseTmp?.tasks.map((taskItem) => {
      if (taskName === taskItem.name) {
        taskItem.isActive = true
      } else {
        taskItem.isActive = false
      }
      return taskItem
    })

    setActiveCase(activeCaseTmp)
    setActiveTask(getActiveTask())

    // scrollTo('Block10__tasks', -200)
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
        <h1>Кейсы</h1>
        {activeCase && (
          <Container key={activeCase.name} fluid className="Block10__case">
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
            <Row className="Block10__caseRow m-0 justify-content-between">
              {activeCase.caseItems.map((caseItem, index) => {
                return (
                  <Col md={index === 0 ? 6 : 3} key={index} className="Block10__caseCont">
                    <CaseItemCard caseItem={caseItem} />
                  </Col>
                )
              })}
            </Row>
            {activeTask && (
              // <Element name="Block10__tasks">
                <Container key={activeTask.name} fluid className="Block10__tasks p-0">
                  <Row className="Block10__caseRow1 m-0">
                    <Col xl={6} lg={12} className="Block10__caseCol1 p-0">
                      <TaskDropDownCard taskList={activeCase.tasks} taskChange={taskChange} />
                    </Col>
                  </Row>
                  {activeTask && <h3>Задача: {activeTask.name}</h3>}
                  <Row className="Block10__caseRow m-0 justify-content-between">
                    {activeTask.taskItems.map((taskItem, index) => {
                      return (
                        <Col
                          lg={index === 0 ? 6 : 3}
                          key={index}
                          className={`Block10__caseCont ${index === 0 && 'Block10__caseContSpecial'}`}
                          style={{ padding: 20 }}
                        >
                          <TaskItemCard taskItem={taskItem} />
                        </Col>
                      )
                    })}
                  </Row>
                </Container>
              // </Element>
            )}

            <Row className="Block10__button m-0 align-items-center">
              <Col lg={6} md={12} className="Block10__buttonCol">
                <p>Нужно провести подобное исследование?</p>
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
