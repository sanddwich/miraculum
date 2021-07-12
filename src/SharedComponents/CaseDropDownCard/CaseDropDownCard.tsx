import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
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
        <Row className="CaseDropDownCard__Row justify-content-between align-items-center">
          <div className="CaseDropDownCard__name d-flex">
            <div className="CaseDropDownCard__nameImg">
              <img src={props.icon} alt={props.title} />
            </div>
            <div className="CaseDropDownCard__nameTitle">{props.title}</div>
          </div>
          <div className="CaseDropDownCard__ddImg">
            <img src="/icons/arrowDown.svg" alt="" />
          </div>
        </Row>
        {dropDown && (
          <Row className="CaseDropDownCard__ddCont">
            <Container fluid className="CaseDropDownCard__dd">
              {props.caseList.map((caseItem, index) => {
                return (
                  <Container
                    key={index}
                    fluid
                    className="CaseDropDownCard__caseItem d-flex align-items-center"
                    onClick={() => props.caseChange(caseItem.name)}
                  >
                    <div className="CaseDropDownCard__caseItemImg">
                      <img src={caseItem.icon} alt={caseItem.name} />
                    </div>
                    <div className="CaseDropDownCard__caseItemTitle">{caseItem.name}</div>
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
