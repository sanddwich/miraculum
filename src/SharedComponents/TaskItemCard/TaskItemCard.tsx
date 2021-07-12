import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TaskItemInterface from '../../Redux/interfaces/AdditionalInterfaces/TaskItemInterface'
import './TaskItemCard.scss'

interface TaskItemCardProps {
  taskItem: TaskItemInterface
}

export default function TaskItemCard(props: TaskItemCardProps) {
  return (
    <Container fluid className="TaskItemCard">
      <Row className="TaskItemCard__Row m-0">
        <Col xs={12} className="TaskItemCard__Col">
          <div className="TaskItemCard__header d-flex align-items-center">
            <div className="TaskItemCard__img">
              <img src={props.taskItem.icon} alt={props.taskItem.title} />
            </div>
            <div className="TaskItemCard__title">{props.taskItem.title}</div>
          </div>
          {props.taskItem.text && <div className="TaskItemCard__text">{props.taskItem.text}</div>}
        </Col>
      </Row>
    </Container>
  )
}
