import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { LocalData } from "../../const/common";
import { ICar } from "../../schema/carSchema";
import { getCarByStockNumber } from "../../services/carServices";


const CarDetails: React.FunctionComponent<IProps> = ({ }) => {
    const { id } = useParams();
    const [activeCar, setActiveCar] = useState<ICar>({});
    const [allFavourites, setAllFavourites] = useState<ICar[]>([]);

    useEffect(() => {
        const stockNumber = id && parseInt(id);
        if (stockNumber) {
            getCarByStockNumber(stockNumber).then(setActiveCar)
        }
        const favouites = localStorage.getItem(LocalData.favourites) || "[]";
        setAllFavourites(JSON.parse(favouites));
    }, [id]);

    const addFavouriteClick = useCallback(() => {
        const updatedFavs = [...allFavourites, activeCar];
        localStorage.setItem(LocalData.favourites, JSON.stringify(updatedFavs));
        setAllFavourites(updatedFavs);
    }, [activeCar, allFavourites]);

    const removeFavouriteClick = useCallback(() => {
        const updatedFavs = allFavourites.filter(_fav => _fav.stockNumber !== activeCar.stockNumber);
        localStorage.setItem(LocalData.favourites, JSON.stringify(updatedFavs));
        setAllFavourites(updatedFavs);
    }, [activeCar, allFavourites]);

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
                        {allFavourites?.some(fav => activeCar?.stockNumber === fav.stockNumber) ? (
                            <Button
                                variant="secondary"
                                size="lg"
                                name="removeFavourite"
                                onClick={removeFavouriteClick}
                            >
                                Remove Favourite
                            </Button>
                        ) : (
                            <Button
                                variant="secondary"
                                size="lg"
                                name="addFavourite"
                                onClick={addFavouriteClick}
                            >
                                Save
                            </Button>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default CarDetails;

interface IProps { }