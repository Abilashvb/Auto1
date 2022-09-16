import { rootUrl } from "../const/common";
import { ICarManufacturer } from "../schema/carManufacturerSchema";

export const getCarManufacturers = (): Promise<ICarManufacturer[]> => {
    return new Promise((resolve, reject) => {
        fetch(`${rootUrl}/manufacturers`).then(async (response) => {
            const data = await response.json();
            resolve(data.manufacturers);
        }).catch(err => {
            reject(err);
        })
    })
}