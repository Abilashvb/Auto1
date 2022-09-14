import React from "react";
import { Col } from "react-bootstrap";

const PagingControls: React.FunctionComponent = (props) => {
    return (
        <Col xs={12} md={12} className="pagingControls">
            <span>First</span>
            <span>Previous</span>
            <span>Page 1 out of 10</span>
            <span>Next</span>
            <span>Last</span>
        </Col>
    )
}

export default PagingControls;