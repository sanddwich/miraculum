import React, { useState } from 'react'
import './CircleDot.scss'

interface CircleDotProps {
  children?: React.ReactNode
  diam: number
  bgCircles: string
  bgCirclesHover: string
}

export default function CircleDot(props: CircleDotProps) {
  const [bg, setBg] = useState<string>(props.bgCircles)
  const [bgHover, setBgHover] = useState<string>(props.bgCirclesHover)
  const [message, setMessage] = useState(false)

  const onHover = (): void => {
    setBg(props.bgCirclesHover)
    setBgHover(props.bgCircles)
    setMessage(true)
  }

  const onLeave = (): void => {
    setBg(props.bgCircles)
    setBgHover(props.bgCirclesHover)
    setMessage(false)
  }

  return (
    <div
      className="CircleDot d-flex justify-content-center align-items-center"
      style={{ width: props.diam, height: props.diam, border: `3px solid ${props.bgCircles}`, borderRadius: '50%' }}
      onMouseEnter={() => onHover()}
      onMouseLeave={() => onLeave()}
    >
      {message && <div className="CircleDot_message">{props.children}</div>}
      <div
        className="CircleDot__internal d-flex justify-content-center align-items-center"
        style={{
          width: props.diam * 0.6,
          height: props.diam * 0.6,
          backgroundColor: bg,
          color: bgHover,
          borderRadius: '50%',
        }}
      >
        +
      </div>
    </div>
  )
}
