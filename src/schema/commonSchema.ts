import { ICar } from "./carSchema";

export interface IBase {
    cars?: ICar[];
    totalCarsCount?: number;
    totalPageCount?: number;
}

export interface IMilage {
    number?: number;
    unit?: string;
}