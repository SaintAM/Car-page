import React from "react";
import styles from "./CreateCarForm.module.css";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CarsServices } from "../../../services/cars.services";

const CreateCarForm = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });
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

    return (
        <form className={styles.form} onSubmit={handleSubmit(createCar)}>
            <input
                {...register("name", { required: "Name is required!" })}
                placeholder="Name"
            />
            {errors?.name?.message && (
                <p style={{ color: "red" }}>Name is required</p>
            )}

            <input
                {...register("price", { required: "Price is required!" })}
                placeholder="Price"
            />
            {errors?.price?.message && (
                <p style={{ color: "red" }}>Price is required</p>
            )}

            <input
                {...register("image", { required: "Image is required!" })}
                placeholder="Image"
            />
            {errors?.image?.message && (
                <p style={{ color: "red" }}>Image is required</p>
            )}

            <button className="btn">Create</button>
        </form>
    );
};

export default CreateCarForm;
