import React, { useEffect, useState } from "react";
import { ICar } from "../schema/carSchema";
import { IBase } from "../schema/commonSchema";
import { getCarData } from "../services/carServices";
import AppContext from "./AppContext";

const AppProvider: React.FC<IProps> = (props) => {
  const [activeResponse, setActiveResponse] = useState<IBase>({});
  const [cars, setCars] = useState<ICar[]>([]);

  useEffect(() => {
    getCarData().then(res => {
      setActiveResponse(activeResponse);
      setCars(res?.cars || []);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        siteUrl: props.siteUrl,
        activeResponse,
        cars
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export interface IProps {
  siteUrl: string;
  children?: any;
}
