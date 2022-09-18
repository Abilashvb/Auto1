import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { LocalData } from "../../const/common";
import { ICar } from "../../schema/carSchema";
import { getCarByStockNumber } from "../../services/carServices";
import NotFound from "../common/NotFound";

const CarDetails: React.FunctionComponent<IProps> = ({ }) => {
    const { id } = useParams();
    const [activeCar, setActiveCar] = useState<ICar>({});
    const [allFavourites, setAllFavourites] = useState<ICar[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        const stockNumber = id && parseInt(id);
        if (stockNumber) {
            getCarByStockNumber(stockNumber)
                .then((res) => {
                    setActiveCar(res);
                    setLoading(false);
                }).catch(err => {
                    setActiveCar({});
                    setLoading(false);
                })
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
            {!loading && (
                <>
                    {Object.keys(activeCar)?.length ? (
                        <>
                            <div className="carDetailsImage" style={{ backgroundImage: `url(${activeCar?.pictureUrl})` }} />
                            <Row>
                                <Col xs={12} md={8} className="carDetailsLeft">
                                    <h2>{activeCar.manufacturerName}</h2>
                                    {activeCar?.stockNumber && (
                                        <h4>
                                            {`Stock # 
                        ${activeCar?.stockNumber} - ${activeCar?.mileage?.number} 
                        ${activeCar?.mileage?.unit} - ${activeCar?.fuelType} - ${activeCar?.color}`}
                                        </h4>
                                    )}
                                    <p>
                                        This car is currently available and can be delivered as soon as
                                        tomorrow morning. Please be aware that delivery times shown in
                                        this page are not definitive and may change due to bad weather
                                        conditions
                                    </p>
                                </Col>
                                <Col xs={12} md={4} className="carDetailsRight">
                                    <div className="favBox">
                                        <p>
                                            If you like this car, click the button and
                                            save it in your collection of favourite
                                            items.
                                        </p>
                                        <div>
                                            {allFavourites?.some(fav => activeCar?.stockNumber === fav.stockNumber) ? (
                                                <Button
                                                    name="removeFavourite"
                                                    onClick={removeFavouriteClick}
                                                    className="btn-common"
                                                >
                                                    Remove Favourite
                                                </Button>
                                            ) : (
                                                <Button
                                                    name="addFavourite"
                                                    onClick={addFavouriteClick}
                                                    className="btn-common"
                                                >
                                                    Save
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </>
                    ) : (
                        <NotFound />
                    )}
                </>
            )}
        </Container>

    )
}

export default CarDetails;

interface IProps { }