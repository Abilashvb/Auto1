import React, { useContext } from "react";
import { Button, Col } from "react-bootstrap";
import AppContext from "../AppContext/AppContext";

const PagingControls: React.FunctionComponent = (props) => {
    const {
        onNextPageClick,
        activeResponse,
        activePageNumber,
        onPrevPageClick,
        onFirstPageClick,
        onLastPageClick
    } = useContext(AppContext);

    return (
        <Col xs={12} md={12} className="pagingControls">
            <Button
                variant="link"
                onClick={onFirstPageClick}
                disabled={activePageNumber === 1}
            >First</Button>
            
            <Button
                variant="link"
                onClick={onPrevPageClick}
                disabled={activePageNumber === 1}
            >Previous</Button>
            <span>{`Page ${activePageNumber} out of ${activeResponse?.totalPageCount}`}</span>

            <Button
                variant="link"
                onClick={onNextPageClick}
                disabled={activePageNumber === activeResponse.totalPageCount}
            >Next</Button>

            <Button
                variant="link"
                onClick={onLastPageClick}     
                disabled={activePageNumber === activeResponse.totalPageCount}           
            >Last</Button>
        </Col>
    )
}

export default PagingControls;