import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import OutsideClickHandler from 'react-outside-click-handler'
import CaseInterface from '../../Redux/interfaces/AdditionalInterfaces/CaseInterface'
import './CaseDropDownCard.scss'

interface CaseDropDownCardProps {
  icon: string
  title: string
  caseList: CaseInterface[]
  caseChange: (caseName: string) => void
}

export default function CaseDropDownCard(props: CaseDropDownCardProps) {
  const [dropDown, setDropDown] = useState<boolean>(false)

  return (
    <OutsideClickHandler onOutsideClick={() => setDropDown(false)}>
      <Container fluid className="CaseDropDownCard" onClick={() => setDropDown(!dropDown)}>
        <Row className="CaseDropDownCard__Row m-0 justify-content-between align-items-center">
          <Col xs={10} className="CaseDropDownCard__name p-0 d-flex  justify-content-start align-items-center">
            <div className="CaseDropDownCard__nameImg">
              <img src={props.icon} alt={props.title} />
            </div>
            <div className="CaseDropDownCard__nameTitle">{props.title}</div>
          </Col>
          <Col xs={2} className="CaseDropDownCard__ddImg p-0 d-flex justify-content-end align-items-center">
            <img src="/icons/arrowDown.svg" alt="" />
          </Col>
        </Row>
        {dropDown && (
          <Row className="CaseDropDownCard__ddCont m-0">
            <Container fluid className="CaseDropDownCard__dd">
              {props.caseList.map((caseItem, index) => {
                return (
                  <Container
                    key={index}
                    fluid
                    className="CaseDropDownCard__caseItem d-flex align-items-center"
                    onClick={() => props.caseChange(caseItem.name)}
                  >
                    <div className="CaseDropDownCard__caseItemImg d-flex justify-content-center align-items-center">
                      <img src={caseItem.icon} alt={caseItem.name} />
                    </div>
                    <div className="CaseDropDownCard__caseItemTitle d-flex justify-content-start align-items-center">
                      {caseItem.name}
                    </div>
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
