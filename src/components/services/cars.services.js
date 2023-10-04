import axios from "axios";
export const CarsServices = {
    async getAll() {
        const responce = await axios.get("http://localhost:3000/cars");
        return responce.data;
    },
    async getById(id) {
        const responce = await axios.get(
            `http://localhost:3000/cars/?id=${id}`
        );
        return responce.data[0];
				
    },
};
