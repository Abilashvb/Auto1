import React, { useContext } from "react";
import { ICar } from "../schema/carSchema";
import './Style.css';


const CarCard: React.FunctionComponent<IProps> = ({ car }) => {
    return (
        <div className="cardView" key={`${car?.stockNumber}`}>
            <div className="left">
                <img src={`${car?.pictureUrl}`} />
            </div>
            <div className={`right`}>
                <h3>{car?.manufacturerName}</h3>
                <div>
                    {`Stock # ${car?.stockNumber} - ${car?.mileage?.number} ${car?.mileage?.unit} - ${car?.fuelType} - ${car?.color}`}
                </div>
            </div>
        </div>
    )
}

export default CarCard;

interface IProps {
    car: ICar;
}