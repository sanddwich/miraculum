import React, { useEffect, useState } from 'react'
import { ArrowUpCircleFill } from 'react-bootstrap-icons'
import { animateScroll } from 'react-scroll'
import './ScrollButton.scss'

interface ScrollButtonProps {}

export default function ScrollButton(props: ScrollButtonProps) {
  const [buttonVisible, setButtonVisible] = useState<boolean>(false)

  useEffect(() => {
    document.addEventListener('scroll', checkHeight)
  }, [])

  const checkHeight = (): void => {
    const height: number = window.pageYOffset
    height > 500 ? setButtonVisible(true) : setButtonVisible(false)
  }

  return (
    <React.Fragment>
      {buttonVisible ? (
        <div className="ScrollButton" onClick={() => animateScroll.scrollToTop()}>
          <ArrowUpCircleFill size={50} />
        </div>
      ) : null}
    </React.Fragment>
  )
}
