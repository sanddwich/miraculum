import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import OutsideClickHandler from 'react-outside-click-handler'
import TaskInterface from '../../Redux/interfaces/AdditionalInterfaces/TaskInterface'
import './TaskDropDownCard.scss'

interface TaskDropDownCardProps {
  icon?: string
  taskList: string[]
}

export default function TaskDropDownCard(props: TaskDropDownCardProps) {
  const [dropDown, setDropDown] = useState<boolean>(false)

  return (
    <OutsideClickHandler onOutsideClick={() => setDropDown(false)}>
      <Container fluid className="TaskDropDownCard" onClick={() => setDropDown(!dropDown)}>
        <Row className="TaskDropDownCard__Row m-0 justify-content-between align-items-center">
          <Col xs={10} className="TaskDropDownCard__name  p-0 d-flex  justify-content-start align-items-center">
            <div className="TaskDropDownCard__nameImg d-flex align-items-center">
              <img src={`/icons/taskList.svg`} />
            </div>
            <div className="TaskDropDownCard__nameTitle">Задачи</div>
          </Col>
          <Col xs={2} className="TaskDropDownCard__ddImg p-0 d-flex justify-content-end align-items-center">
            <img src="/icons/arrowDownYellow.svg" alt="" />
          </Col>
        </Row>
        {dropDown && (
          <Row className="TaskDropDownCard__ddCont m-0">
            <Container fluid className="TaskDropDownCard__dd">
              {props.taskList.map((taskItem, index) => {
                return (
                  <Container
                    key={index}
                    fluid
                    className="TaskDropDownCard__caseItem d-flex align-items-center"
                    onClick={() => props.taskChange(taskItem.name)}
                  >
                    <div className="TaskDropDownCard__caseItemTitle">{taskItem.name}</div>
                  </Container>
                )
              })}
            </Container>
          </Row>
        )}
      </Container>
    </OutsideClickHandler>
  )
}
