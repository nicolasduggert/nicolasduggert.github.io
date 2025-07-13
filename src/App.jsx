import { useState } from 'react'
import { Image } from "antd";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Col, Divider, Row } from 'antd';

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
      <div >

        <Row gutter={16}>
          <Col>
            <img src="..\screenshots\Billy Bandit_1.13.1.png"/>
          </Col>
          <Col>
            <img src="..\screenshots\Billy Bandit_1.13.1.png"/>
          </Col>

        </Row>
       
       
      </div>
    </>
  )
}

export default App
