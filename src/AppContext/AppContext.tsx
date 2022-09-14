import React from "react";
import { ICar } from "../schema/carSchema";
import { IBase } from "../schema/commonSchema";

export interface IAppContext {
    siteUrl: string;
    activeResponse: IBase;
    cars: ICar[];
    onNextPageClick: any;
}

const AppContext = React.createContext<IAppContext>({
    siteUrl: "",
    activeResponse: {},
    cars: [],
    onNextPageClick: undefined
});

export default AppContext;
