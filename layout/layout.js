import React, {useContext, useEffect} from "react"
import Head from "next/head"
import Image from 'next/image'
import styles from './Layout.module.scss'
import {Container, Nav, Navbar, Form, Row, Col, Button, InputGroup, NavDropdown, Offcanvas} from 'react-bootstrap'
import { Search, MoonFill, SunFill } from 'react-bootstrap-icons'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import { Context } from "../pages/_app"

function Layout (props) {

    const apiContext = useContext(Context)
    //console.log(apiContext.theme)

    const formSearchSubmit = async (e) =>  {
        e.preventDefault()
    }

    /* 'sm', 'md', 'lg', 'xl', 'xxl' */
    const expand = 'lg'

    const setThemes = (e) => {
        apiContext.setTheme({...(apiContext?.theme.iconTheme==='SunFill'?apiContext.themes.light:apiContext.themes.dark)})
    }

    useEffect(() => {
        let html_ = document.querySelector("html");
        html_.setAttribute("data-bs-theme", apiContext?.theme.themeName);
    }, [apiContext?.theme.themeName])

    return (
    <>
        <Head>
            <meta charSet="utf-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="keywords" content=""/>
            <meta name="description" content=""/>
            <meta name="robots" content="noindex, nofollow"/>
            <link rel="shortcut icon" href="/favicon.ico"/>
        </Head>

        <Navbar bg={apiContext?.theme?.themeName} data-bs-theme={apiContext?.theme?.themeName} fixed="top" key={expand} expand={expand}>
            <Container key={'n'} fluid>
                <Navbar.Brand href="/#home">
                    <Image
                        className={styles.logo}
                        src="/img/rb.svg"
                        alt="I ❤ Bootstrap && React"
                        width={34}
                        height={26}
                        priority
                    />{' '}
                    I ❤ Bootstrap && React
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end">

                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            I ❤ Bootstrap && React
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Nav className={'mx-auto mb-3 mb-lg-0'}>       
                            <Nav.Link href="//react-bootstrap.netlify.app/docs/getting-started/introduction" target="_blank">Getting Started</Nav.Link>
                            <Nav.Link href="//react-bootstrap.netlify.app/docs/components/accordion" target="_blank">Components</Nav.Link>
                            <Nav.Link href="//icons.getbootstrap.com/" target="_blank">Icons</Nav.Link>
                        </Nav>
                        <Form inline onSubmit={formSearchSubmit}>
                            <InputGroup>            
                                <Form.Control
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"                       
                                />                  
                                <Button type="submit" variant="secondary"><Search /></Button>              
                            </InputGroup>
                        </Form>
                        <div className="ms-4">
                            <Button variant={apiContext?.theme?.themeName} onClick={setThemes}>
                                {apiContext.theme.iconTheme==='SunFill'?<SunFill />:<MoonFill/>}
                            </Button>
                        </div>
                    </Offcanvas.Body>

                </Navbar.Offcanvas>
            </Container>
        </Navbar>

        <Jumbotron />

        <main role="main" className={styles.main}>            
            {props.children}
        </main>

        <footer style={{backgroundColor:apiContext.theme?.background, color:apiContext.theme?.foreground}}>
            <Container key={'f0'}>&copy; I ❤ Bootstrap && React</Container>
        </footer>
    </>)
}

export default Layout