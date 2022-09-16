import { rootUrl } from "../const/common";

export const getCarColors = (): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        fetch(`${rootUrl}/colors`).then(async (response) => {
            const data = await response.json();
            resolve(data.colors);
        }).catch(err => {
            reject(err);
        })
    })
}