import React from "react";
import { ICar } from "../schema/carSchema";
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import { Row } from "react-bootstrap";


const CarCard: React.FunctionComponent<IProps> = ({ car }) => {
    return (
        <Row className="cardContainer">
            <Col xs={12} md={2} className="cardLeft">
                <img src={`${car?.pictureUrl}`} />
            </Col>
            <Col xs={12} md={10} className="cardRight">
                <h3>{car?.manufacturerName}</h3>
                <div>
                    {`Stock # ${car?.stockNumber} - 
                   ${car?.mileage?.number} ${car?.mileage?.unit} - 
                   ${car?.fuelType} - ${car?.color}`}
                </div>
                <div>
                    <Link to={`/details/${car?.stockNumber}`}>
                        <p> View details</p>
                    </Link>
                </div>
            </Col>
        </Row>
    )
}

export default CarCard;

interface IProps {
    car: ICar;
}