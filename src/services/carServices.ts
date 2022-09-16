import { rootUrl } from "../const/common";
import { ICar, ICarFilter } from "../schema/carSchema";
import { IBase } from "../schema/commonSchema";


export const getCarData = (page: number, filter: ICarFilter): Promise<IBase> => {
    return new Promise((resolve, reject) => {
        let queryString = `${rootUrl}/cars?page=${page}`;
        if (filter?.color) {
            queryString = filter.color === "all" ? queryString : `${queryString}&color=${filter.color}`;
        }
        if (filter?.manufacturer) {
            queryString = filter.manufacturer === "all" ? queryString : `${queryString}&manufacturer=${filter.manufacturer}`
        }

        fetch(queryString).then(async (response) => {
            const data = await response.json();
            resolve(data);
        }).catch(err => {
            reject(err);
        })
    })
}


export const getCarByStockNumber = (stockNumber: number): Promise<ICar> => {
    return new Promise((resolve, reject) => {
        fetch(`${rootUrl}/cars/${stockNumber}`).then(async (response) => {
            const data = await response.json();
            resolve(data.car);
        }).catch(err => {
            reject(err);
        })
    })
}