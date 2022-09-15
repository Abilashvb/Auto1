import React, { useCallback, useEffect, useState } from "react";
import { ICar } from "../schema/carSchema";
import { IBase } from "../schema/commonSchema";
import { getCarData } from "../services/carServices";
import AppContext from "./AppContext";

const AppProvider: React.FC<IProps> = (props) => {
  const [activeResponse, setActiveResponse] = useState<IBase>({});
  const [cars, setCars] = useState<ICar[]>([]);
  const [activePageNumber, setActivePageNumber] = useState<number>(1);

  useEffect(() => {
    getCarData(activePageNumber).then(res => {
      setActiveResponse(res);
      setCars(res?.cars || []);
    });
  }, []);

  const onNextPageClick = useCallback(() => {
    const nextPage = activePageNumber + 1;
    setActivePageNumber(nextPage);
    getCarData(nextPage).then((res: any) => {
      setActiveResponse(res);
      setCars(res.cars);
    });
  }, [activePageNumber, cars, activeResponse]);

  const onFirstPageClick = useCallback(() => {
    setActivePageNumber(1);
    getCarData(1).then((res: any) => {
      setActiveResponse(res);
      setCars(res.cars);
    });
  }, [activePageNumber, cars, activeResponse]);

  const onLastPageClick = useCallback(() => {
    setActivePageNumber(activeResponse.totalPageCount || 0);
    getCarData(activeResponse.totalPageCount || 0).then((res: any) => {
      setActiveResponse(res);
      setCars(res.cars);
    });
  }, [activePageNumber, cars, activeResponse]);

  const onPrevPageClick = useCallback(() => {
    const prevPage = activePageNumber - 1;
    setActivePageNumber(prevPage);
    getCarData(prevPage).then((res: any) => {
      setActiveResponse(res);
      setCars(res.cars);
    });
  }, [activePageNumber, cars, activeResponse]);

  return (
    <AppContext.Provider
      value={{
        siteUrl: props.siteUrl,
        activeResponse,
        cars,
        onNextPageClick,
        activePageNumber,
        onPrevPageClick,
        onFirstPageClick,
        onLastPageClick
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
