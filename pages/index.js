import Head from 'next/head'
import Image from 'next/image'
import BreadcrumbExample from '../components/BreadcrumbExample/BreadcrumbExample'
import {Row, Col, Container, Alert, Button} from 'react-bootstrap'

export default function Home() {

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
            <Alert key={variant[0]} variant={variant[0]}>
              <Alert.Heading>Hey, nice to see you</Alert.Heading>
              This is a {variant[0]} alert—check it out!
            </Alert>
            <Alert key={variant[1]} variant={variant[1]}>
              <Alert.Heading>Hey, nice to see you</Alert.Heading>
              This is a {variant[1]} alert—check it out!
            </Alert>
            <Alert key={variant[2]} variant={variant[2]}>
              <Alert.Heading>Hey, nice to see you</Alert.Heading>
              This is a {variant[2]} alert—check it out!
            </Alert>
          </Col>
          <Col sm={12} md={4} lg={4}>

          </Col>
        </Row>
      </Container>
    </>
  )
}
