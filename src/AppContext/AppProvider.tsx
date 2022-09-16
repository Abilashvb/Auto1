import React, { useCallback, useEffect, useState } from "react";
import { ICarManufacturer } from "../schema/carManufacturerSchema";
import { ICar, ICarFilter } from "../schema/carSchema";
import { IBase } from "../schema/commonSchema";
import { getCarColors } from "../services/carColorServces";
import { getCarManufacturers } from "../services/carManufacturerServices";
import { getCarData } from "../services/carServices";
import AppContext from "./AppContext";

const AppProvider: React.FC<IProps> = (props) => {
  const [activeResponse, setActiveResponse] = useState<IBase>({});
  const [cars, setCars] = useState<ICar[]>([]);
  const [activePageNumber, setActivePageNumber] = useState<number>(1);
  const [carColors, setCarColors] = useState<string[]>([]);
  const [carManufacturers, setCarManufacturers] = useState<ICarManufacturer[]>([]);
  const [carFilter, setCarFilter] = useState<ICarFilter>({});

  useEffect(() => {
    getCarData(activePageNumber, carFilter).then(res => {
      setActiveResponse(res);
      setCars(res?.cars || []);
    });
    getCarColors().then(setCarColors);
    getCarManufacturers().then(setCarManufacturers);
  }, []);

  const onNextPageClick = useCallback(() => {
    const nextPage = activePageNumber + 1;
    setActivePageNumber(nextPage);
    getCarData(nextPage, carFilter).then((res: any) => {
      setActiveResponse(res);
      setCars(res.cars);
    });
  }, [activePageNumber, cars, activeResponse]);

  const onFirstPageClick = useCallback(() => {
    setActivePageNumber(1);
    getCarData(1, carFilter).then((res: any) => {
      setActiveResponse(res);
      setCars(res.cars);
    });
  }, [activePageNumber, cars, activeResponse]);

  const onLastPageClick = useCallback(() => {
    setActivePageNumber(activeResponse.totalPageCount || 0);
    getCarData(activeResponse.totalPageCount || 0, carFilter).then((res: any) => {
      setActiveResponse(res);
      setCars(res.cars);
    });
  }, [activePageNumber, cars, activeResponse]);

  const onPrevPageClick = useCallback(() => {
    const prevPage = activePageNumber - 1;
    setActivePageNumber(prevPage);
    getCarData(prevPage, carFilter).then((res: any) => {
      setActiveResponse(res);
      setCars(res.cars);
    });
  }, [activePageNumber, cars, activeResponse]);

  const onFilterSubmit = useCallback((e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    setCarFilter(formDataObj);
    setActivePageNumber(1);
    getCarData(1, formDataObj).then((res: any) => {
      setActiveResponse(res);
      setCars(res.cars);
    });
  }, []);

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
        onLastPageClick,
        carColors,
        carManufacturers,
        onFilterSubmit,
        carFilter
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
