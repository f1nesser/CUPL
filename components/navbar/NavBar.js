import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function NavBar({ session }) {
    let logInStatus = (
        <NavDropdown.Item
            href={session ? './api/auth/signout' : './api/auth/signin'}
        >
            {session ? 'Logout' : 'Login'}
        </NavDropdown.Item>
    )
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="./">
                        <Image
                            src="/cupl_logo_flat.png"
                            width="300px"
                            height="55px"
                            className="d-inline-bfffffflign-top"
                            alt="CU PL Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <NavDropdown
                                title={<i className="fa fa-bars fa-fw"></i>}
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="./">
                                    Home
                                </NavDropdown.Item>
                                <NavDropdown.Item href="./Leaderboards">
                                    Leaderboards
                                </NavDropdown.Item>
                                <NavDropdown.Item href="./Roster">
                                    Roster
                                </NavDropdown.Item>
                                <NavDropdown.Item href="./Officers">
                                    Meet the Officers
                                </NavDropdown.Item>
                                <NavDropdown.Item href="./Sponsor">
                                    Sponsor
                                </NavDropdown.Item>
                                <NavDropdown.Item href="./Resources">
                                    Resources
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                {logInStatus}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
