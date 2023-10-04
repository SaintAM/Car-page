import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CarsServices } from "../../../services/cars.services";

export const useCreateCar = (reset) => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation(
        ["create car"],
        (data) => CarsServices.create(data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("cars");
                reset();
            },
        }
    );

    const createCar = (data) => {
        mutate(data);
    };

    return { createCar };
};
