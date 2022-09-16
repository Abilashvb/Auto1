import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ICar } from "../../schema/carSchema";
import { getCarByStockNumber } from "../../services/carServices";


const CarDetails: React.FunctionComponent<IProps> = ({ }) => {
    const { id } = useParams();
    const [activeCar, setActiveCar] = useState<ICar>({});

    useEffect(() => {
        const stockNumber = id && parseInt(id);
        if (stockNumber) {
            getCarByStockNumber(stockNumber).then(setActiveCar)
        }
    }, [id]);

    return (
        <Container>
            <div className="carDetailsImage" style={{ backgroundImage: `url(${activeCar?.pictureUrl})` }} />
            <Row>
                <Col xs={12} md={6}>
                    <h3>{activeCar.manufacturerName}</h3>
                    <div>
                        {`Stock # 
                        ${activeCar?.stockNumber} - ${activeCar?.mileage?.number} 
                        ${activeCar?.mileage?.unit} - ${activeCar?.fuelType} - ${activeCar?.color}`}
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div>
                        <p>
                            If you like this car, click the button and
                            save it in your collection of favourite
                            items.
                        </p>
                        <Button
                            variant="secondary"
                            size="lg"
                            name="addFavourite"
                        >
                            Save
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default CarDetails;

interface IProps { }