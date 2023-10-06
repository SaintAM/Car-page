import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CarsServices } from "../../../services/cars.services";
import { SubmitHandler, UseFormReset } from "react-hook-form";
import { ICarData } from "../../../../types/car.interface";

export const useCreateCar = (reset: UseFormReset<ICarData>) => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation(
        ["create car"],
        (data: ICarData) => CarsServices.create(data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["cars"]);
                reset();
            },
        }
    );

    const createCar: SubmitHandler<ICarData> = (data) => {
        mutate(data);
    };

    return { createCar };
};
