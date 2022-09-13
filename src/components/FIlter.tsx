import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Style.css';

const Filter: React.FunctionComponent = (props) => {

    return (
        <Col xs={12} md={4}>
            <Form >
                <Form.Group as={Col} md="12">
                    <Form.Label>Color</Form.Label>
                    <Form.Select aria-label="Group" className="formControl">
                        <option value={1}>{"All Car Colors"}</option>
                        <option value={2}>{"Red"}</option>
                        <option value={3}>{"Black"}</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="12">
                    <Form.Label>Manufacturer</Form.Label>
                    <Form.Select aria-label="Group" className="formControl">
                        <option value={1}>{"All Manufacturer"}</option>
                        <option value={2}>{"Red"}</option>
                        <option value={3}>{"Black"}</option>
                    </Form.Select>
                </Form.Group>
                <Col>
                    <Button
                        variant="secondary"
                        size="lg"
                        type="submit"
                    >
                        Filter
                    </Button>
                </Col>
            </Form>
        </Col>
    )
}

export default Filter;