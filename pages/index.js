import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import BreadcrumbExample from '../components/BreadcrumbExample/BreadcrumbExample'
import {Row, Col, Container, Alert, Button} from 'react-bootstrap'
import { HeartFill, CupHotFill, Boxes, ExclamationCircleFill } from 'react-bootstrap-icons'
import ListGroup from 'react-bootstrap/ListGroup'

export default function HomeIndex() {
  const [show, setShow] = useState(true)
  const [show1, setShow1] = useState(true)
  const [show2, setShow2] = useState(true)

  const variant = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]

  const alertClicked = (e) => {
    console.log(e.currentTarget.innerText)
    alert(e.currentTarget.innerText)
  }

  return (
    <>
      <Head>
        <title>I ❤ Bootstrap && React</title>
      </Head>
      
      <Container>
        <BreadcrumbExample/>
        <Row>
          
          <Col sm={12} md={8} lg={8}>
            <h1>I ❤ Bootstrap && React</h1>
            
            <Alert key={variant[0]} variant={variant[0]} onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Hey, nice to see you</Alert.Heading>
              This is a {variant[0]} alert—check it out!
            </Alert>
            <Alert key={variant[1]} variant={variant[1]} onClose={() => setShow1(false)} dismissible>
              <Alert.Heading>Hey, nice to see you</Alert.Heading>
              This is a {variant[1]} alert—check it out!
            </Alert>
            <Alert key={variant[2]} variant={variant[2]} onClose={() => setShow2(false)} dismissible>
              <Alert.Heading>Hey, nice to see you</Alert.Heading>
              This is a {variant[2]} alert—check it out!
            </Alert>
          </Col>
          
          <Col sm={12} md={4} lg={4}>

            <Alert key={`r0_${variant[0]}`} variant={variant[0]}>
              <ExclamationCircleFill/> Bootstrap&rsquo;s grid system uses a&nbsp;series of&nbsp;containers, rows, and columns to&nbsp;layout and align content.
            </Alert>

            <ListGroup as="ol" numbered className='mb-3'>
              <ListGroup.Item action onClick={alertClicked}>Cras justo odio</ListGroup.Item>
              <ListGroup.Item action onClick={alertClicked}>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item action onClick={alertClicked}>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item action onClick={alertClicked}>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>

            <Alert key={`r1_${variant[1]}`} variant={variant[1]}>
              <CupHotFill/> Icon have is&nbsp;<Alert.Link href="//icons.getbootstrap.com" target='_blank'>react-bootstrap-icons</Alert.Link>
            </Alert>
          </Col>

        </Row>
      </Container>
    </>
  )
}
