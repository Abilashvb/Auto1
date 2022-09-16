import React, { useContext } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Style.css';
import AppContext from "../AppContext/AppContext";

const Filter: React.FunctionComponent = (props) => {
    const { carManufacturers, carColors, onFilterSubmit, carFilter } = useContext(AppContext);

    return (
        <Col xs={12} md={4}>
            <Form onSubmit={onFilterSubmit}>
                <Form.Group as={Col} md="12">
                    <Form.Label>Color</Form.Label>
                    <Form.Select
                        name="color"
                        defaultValue={carFilter?.color}
                    >
                        <option value={"all"}>{"All Car Colors"}</option>
                        {carColors?.map(_color => <option value={_color} key={_color}>{_color}</option>)}
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="12">
                    <Form.Label>Manufacturer</Form.Label>
                    <Form.Select
                        name="manufacturer"
                        defaultValue={carFilter?.manufacturer}
                    >
                        <option value={"all"}>{"All Manufacturer"}</option>
                        {carManufacturers?.map(_manufacturer =>
                            <option key={_manufacturer.name} value={_manufacturer.name}>{_manufacturer.name}</option>)}
                    </Form.Select>
                </Form.Group>
                <Col>
                    <Button
                        variant="secondary"
                        size="lg"
                        type="submit"
                        name="filterSubmit"
                    >
                        Filter
                    </Button>
                </Col>
            </Form>
        </Col>
    )
}

export default Filter;