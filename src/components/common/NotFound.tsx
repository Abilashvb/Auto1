import React from "react";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const NotFound: React.FunctionComponent = (props) => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={12} className="notFound">
                    <div>
                        <img src={logo} width="200px" />
                    </div>
                    <h2>404 - Not Found</h2>
                    <p>Sorry, the page you are looking for does not exist.</p>
                    <p>You can always go back to the <Link to={`/`}>homepage</Link></p>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound;