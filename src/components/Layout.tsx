import React, { useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import avatar from "../assets/logo.png";
import './Style.css';
import PageFooter from "./PageFooter";

const Layout: React.FunctionComponent<IProps> = (props) => {

    useEffect(() => {
        document.title = 'Auto 1';
    }, []);

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="navBar">
                <Container>
                    <Navbar.Brand>
                        <Link to={`/`}>
                            <img src={avatar} width="200px" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#">Purchase</Nav.Link>
                            <Nav.Link href="#">My Orders</Nav.Link>
                            <Nav.Link href="#">Sell</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {props.children}
            <PageFooter />
        </div>
    )
}

export default Layout;

interface IProps {
    children?: any;
}