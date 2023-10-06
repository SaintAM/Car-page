import { ICar, ICarData } from "./../../types/car.interface";
import axios from "axios";
export const CarsServices = {
    async getAll() {
        const responce = await axios.get<ICar[]>("http://localhost:3000/cars");
        return responce.data;
    },
    async getById(id: string) {
        const responce = await axios.get<ICar[]>(
            `http://localhost:3000/cars/?id=${id}`
        );
        return responce.data[0];
    },
    async create(data: ICarData) {
        return axios.post("http://localhost:3000/cars", data);
    },
};
