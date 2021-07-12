import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Config } from '../../../../../Config/Config'
import CaseInterface from '../../../../../Redux/interfaces/AdditionalInterfaces/CaseInterface'
import CaseDropDownCard from '../../../../../SharedComponents/CaseDropDownCard/CaseDropDownCard'
import CaseItemCard from '../../../../../SharedComponents/CaseItemCard/CaseItemCard'
import './Block10.scss'

interface Block10Props {}

export default function Block10(props: Block10Props) {
  const [cases, setCases] = useState<Array<CaseInterface>>(Config.cases)
  const [activeCase, setActiveCase] = useState<CaseInterface | undefined>(() => {
    const activeCase = Config.cases.find((caseItem) => caseItem.isActive === true)
    return activeCase
  })

  const getActiveCase = (): CaseInterface | undefined => {
    const activeCase = cases.find((caseItem) => caseItem.isActive === true)
    return activeCase
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
  }

  return (
    <Container className="Block10">
      <h1>Кейсы</h1>
      {activeCase && (
        <Container key={activeCase.name} fluid className="Block10__case">
          <CaseDropDownCard icon={activeCase.icon} title={activeCase.name} caseList={cases} caseChange={caseChange} />
          <Row className="Block10__caseRow2 m-0 justify-content-between">
            {activeCase.caseItems.map((caseItem, index) => {
              return (
                <div key={index} className="Block10__caseCont">
                  <CaseItemCard caseItem={caseItem} />
                </div>
              )
            })}
          </Row>
        </Container>
      )}
    </Container>
  )
}
