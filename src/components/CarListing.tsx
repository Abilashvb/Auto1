import React, { useContext } from "react";
import Col from 'react-bootstrap/Col';
import './Style.css';
import AppContext from "../AppContext/AppContext";
import CarCard from "./CarCard";

const CarListing: React.FunctionComponent = (props) => {

    const { cars } = useContext(AppContext);

    return (
        <Col xs={12} md={8}>
            {cars && cars.map(_car => <CarCard car={_car} />)}
        </Col>
    )
}

export default CarListing;