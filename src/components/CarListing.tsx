import React, { useContext } from "react";
import Col from 'react-bootstrap/Col';
import './Style.css';
import AppContext from "../AppContext/AppContext";
import CarCard from "./CarCard";
import PagingControls from "./PagingControls";
import { Config } from "../const/common";

const CarListing: React.FunctionComponent = (props) => {

    const { cars, activePageNumber } = useContext(AppContext);
    // const sliceStart = activePageNumber === 1 ? 0 :
    //     ((activePageNumber * Config.pageItemCount) - Config.pageItemCount);

    // const sliceEnd = activePageNumber * Config.pageItemCount;

    // const activeCarData = cars && cars.slice(sliceStart, sliceEnd);

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