import React, { useContext } from "react";
import Col from 'react-bootstrap/Col';
import AppContext from "../AppContext/AppContext";
import CarCard from "./CarCard";
import PagingControls from "./PagingControls";

const CarListing: React.FunctionComponent = (props) => {

    const { cars, activeResponse } = useContext(AppContext);

    return (
        <>
            <Col xs={12} md={8}>
                <div>
                    <h3>Available cars</h3>
                    {activeResponse?.totalCarsCount && (
                        <h5>{`Showing ${cars?.length} of ${activeResponse?.totalCarsCount} results`}</h5>
                    )}
                </div>
                {cars && cars
                    .map((_car, index) => <CarCard key={`car${index}`} car={_car} />)}
                <PagingControls />
            </Col>
        </>
    )
}

export default CarListing;