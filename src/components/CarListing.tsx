import React, { useContext } from "react";
import Col from 'react-bootstrap/Col';
import './Style.css';
import AppContext from "../AppContext/AppContext";
import CarCard from "./CarCard";
import PagingControls from "./PagingControls";

const CarListing: React.FunctionComponent = (props) => {

    const { cars } = useContext(AppContext);

    return (
        <>
            <Col xs={12} md={8}>
                {cars && cars
                    .map((_car, index) => <CarCard key={`car${index}`} car={_car} />)}
                <PagingControls />
            </Col>
        </>
    )
}

export default CarListing;