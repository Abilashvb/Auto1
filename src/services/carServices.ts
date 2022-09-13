import { IBase } from "../schema/commonSchema";

const rootUrl = `https://auto1-mock-server.herokuapp.com/api`;

export const getCarData = (): Promise<IBase> => {
    return new Promise((resolve, reject) => {
        fetch(`${rootUrl}/cars`).then(async (response) => {
            const data = await response.json();
            resolve(data);
        }).catch(err => {
            reject(err);
        })
    })
}