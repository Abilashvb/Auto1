import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Filter from "./FIlter";
import CarListing from "./CarListing";

const Dashboard: React.FunctionComponent = (props) => {
    return (
        <Container className="dashboard">
            <Row>
                <Filter />
                <CarListing />
            </Row>
        </Container>
    )
}

export default Dashboard;