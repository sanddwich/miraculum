import React from 'react'
import { Container } from 'react-bootstrap'
import Block1 from './Block1/Block1'
import Block2 from './Block2/Block2'
import Block3 from './Block3/Block3'
import Block4 from './Block4/Block4'
import Block5 from './Block5/Block5'
import './Main.scss'

interface MainProps {}

interface MainState {}

class Main extends React.Component<MainProps, MainState> {
  render() {
    return (
      <Container fluid className="Main p-0">
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />
        <Block5 />
      </Container>
    )
  }
}

export default Main