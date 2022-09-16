import React from "react";
import { ICar } from "../schema/carSchema";
import { Link } from "react-router-dom";
import './Style.css';
import { Button } from "react-bootstrap";


const CarCard: React.FunctionComponent<IProps> = ({ car }) => {
    return (
        <div className="cardView" key={`${car?.stockNumber}`}>
            <div className="left">
                <img src={`${car?.pictureUrl}`} />
            </div>
            <div className={`right`}>
                <h3>{car?.manufacturerName}</h3>
                <div>
                    {`Stock # ${car?.stockNumber} - 
                    ${car?.mileage?.number} ${car?.mileage?.unit} - 
                    ${car?.fuelType} - ${car?.color}`}
                </div>
                <div>
                    <Link to={`/details/${car?.stockNumber}`}>
                        <Button variant="link">
                            View details
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CarCard;

interface IProps {
    car: ICar;
}