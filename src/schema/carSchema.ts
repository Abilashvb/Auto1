import { IMilage } from "./commonSchema";

export interface ICar {
    color?: string;
    fuelType?: string;
    manufacturerName?: string;
    modelName?: string;
    pictureUrl?: string;
    stockNumber?: number;
    mileage?: IMilage;
}

