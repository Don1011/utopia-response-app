import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">
                    <img src="./utopia.png" alt="Logo" style={{ height: 30 }} />
                    &nbsp;
                    Utopia
                </Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/alerts">Alerts</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;