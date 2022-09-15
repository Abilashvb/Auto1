import React from "react";
import { ICar } from "../schema/carSchema";
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
}

const AppContext = React.createContext<IAppContext>({
    siteUrl: "",
    activeResponse: {},
    cars: [],
    onNextPageClick: undefined,
    activePageNumber: 1,
    onPrevPageClick: undefined,
    onFirstPageClick: undefined,
    onLastPageClick: undefined
});

export default AppContext;
