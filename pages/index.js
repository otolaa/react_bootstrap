import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import BreadcrumbExample from '../components/BreadcrumbExample/BreadcrumbExample'
import {Row, Col, Container, Alert, Button, Card, ListGroup, Table, Badge} from 'react-bootstrap'
import { HeartFill, CupHotFill, Boxes, ExclamationCircleFill, CurrencyExchange } from 'react-bootstrap-icons'

export default function HomeIndex() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [cbrJson, setCbrJson] = useState({})
  const [show, setShow] = useState(true)
  const [show1, setShow1] = useState(true)
  const [show2, setShow2] = useState(true)

  useEffect(() => { getStaticPropsApp() }, [])

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

  /* https://www.cbr-xml-daily.ru/daily_json.js */
  const getStaticPropsApp = async () => {
    const [cbr] = await Promise.all([
      (await fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)).json(),
    ])

    if (cbr) {
      setCbrJson(cbr)
      setIsLoaded(true)
    }
  }

  const getCur = (v, p) => {
    let vp = v-p
    return vp > 0 ? `+${vp.toFixed(2)}`:`-${vp.toFixed(2)}`
  }

  const getDataFormat = (dt) => {
    const date = new Date(dt)
    return `${date.toLocaleString('default', { day: 'numeric', month: 'numeric', year: 'numeric' })}, ${date.getHours()}:${date.getMinutes()}`
  }

  /*if (isLoaded) {
    console.log(cbrJson)
    Object.keys(cbrJson.Valute).filter(k=>['USD','EUR','PLN','KZT'].indexOf(k) >= 0).map(i=>(
      console.log(cbrJson.Valute[i])
    ))
  }*/

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
            
            <h2 className='h2'><CurrencyExchange/> Exchange rate for the site {isLoaded && <Badge bg="secondary">{getDataFormat(cbrJson.Date)}</Badge>}</h2>
            <Alert key={variant[1]} variant={variant[1]} onClose={() => setShow1(false)} dismissible>
              The cbr API <Alert.Link href="https://www.cbr-xml-daily.ru/daily_json.js" target='_blank'>www.cbr-xml-daily.ru/daily_json.js</Alert.Link>
            </Alert>
            
            {isLoaded && (<Table className='mb-3'><tbody>{Object.keys(cbrJson.Valute)?.filter(k=>['USD','EUR','PLN','KZT','CNY','UAH','CHF','GBP','JPY'].indexOf(k) >= 0)?.map(i=>(<tr>
              <td>{cbrJson.Valute[i].CharCode}</td>
              <td>{cbrJson.Valute[i].Name}</td>
              <td>{cbrJson.Valute[i].Value}</td>
              <td>{getCur(cbrJson.Valute[i].Value, cbrJson.Valute[i].Previous)}</td>
            </tr>))}</tbody></Table>)}

            {/*<Alert key={variant[2]} variant={variant[2]} onClose={() => setShow2(false)} dismissible>
              <Alert.Heading>Hey, nice to see you</Alert.Heading>
              This is a {variant[2]} alert—check it out!
            </Alert>*/}
          </Col>
          
          <Col sm={12} md={4} lg={4}>

            <Alert key={`r0_${variant[0]}`} variant={variant[0]}>
              <ExclamationCircleFill/> Bootstrap&rsquo;s grid system uses a&nbsp;series of&nbsp;containers, rows, and columns to&nbsp;layout and align content.
            </Alert>

            <ListGroup as="ol" numbered className='mb-3'>
              <ListGroup.Item action onClick={alertClicked}>Cras justo odio</ListGroup.Item>
              <ListGroup.Item action onClick={alertClicked}>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item action onClick={alertClicked}>Morbi leo risus</ListGroup.Item>
            </ListGroup>

            <Alert key={`r1_${variant[1]}`} variant={variant[1]}>
              <CupHotFill/> Icon have is&nbsp;<Alert.Link href="//icons.getbootstrap.com" target='_blank'>react-bootstrap-icons</Alert.Link>
            </Alert>

            <Card
             bg={variant[6].toLowerCase()}
             key={variant[6]}
             text={variant[6].toLowerCase() === 'light' ? 'dark' : 'white'}
             className="mb-3"
            >
              <Card.Body>
                <Card.Title>Weather block</Card.Title>
                <Card.Text>This is some text within a card body, from Weather text block</Card.Text>
                <Card.Link href="//react-bootstrap.netlify.app/docs/components/cards" target='_blank'>Card Link</Card.Link>                
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </>
  )
}
