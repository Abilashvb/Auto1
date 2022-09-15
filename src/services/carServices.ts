import { IBase } from "../schema/commonSchema";

const rootUrl = `https://auto1-mock-server.herokuapp.com/api`;

export const getCarData = (page: number): Promise<IBase> => {
    return new Promise((resolve, reject) => {
        fetch(`${rootUrl}/cars?page=${page}`).then(async (response) => {
            const data = await response.json();
            debugger;
            resolve(data);
        }).catch(err => {
            reject(err);
        })
    })
}