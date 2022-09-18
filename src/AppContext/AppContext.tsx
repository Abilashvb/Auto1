import React from "react";
import { ICarManufacturer } from "../schema/carManufacturerSchema";
import { ICar, ICarFilter } from "../schema/carSchema";
import { IBase } from "../schema/commonSchema";

export interface IAppContext {
    siteUrl: string;
    activeResponse: IBase;
    cars: ICar[];
    onNextPageClick: any;
    activePageNumber: number;
    onPrevPageClick: any;
    onFirstPageClick: any;
    onLastPageClick: any;
    carColors: string[];
    carManufacturers: ICarManufacturer[];
    onFilterSubmit: any;
    carFilter: ICarFilter;
}

const AppContext = React.createContext<IAppContext>({
    siteUrl: "",
    activeResponse: {},
    cars: [],
    onNextPageClick: undefined,
    activePageNumber: 1,
    onPrevPageClick: undefined,
    onFirstPageClick: undefined,
    onLastPageClick: undefined,
    carColors: [],
    carManufacturers: [],
    onFilterSubmit: undefined,
    carFilter: {}
});

export default AppContext;
