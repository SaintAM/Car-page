import React from "react";
import styles from "./CreateCarForm.module.css";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CarsServices } from "../../../services/cars.services";
import ErrorMessage from "./ErrorMessage";
import { useCreateCar } from "./useCreateCar";

const CreateCarForm = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const { createCar } = useCreateCar(reset);

    return (
        <form className={styles.form} onSubmit={handleSubmit(createCar)}>
            <input
                {...register("name", { required: "Name is required!" })}
                placeholder="Name"
            />
            <ErrorMessage errors={errors?.name?.message} />
            <input
                {...register("price", { required: "Price is required!" })}
                placeholder="Price"
            />
            <ErrorMessage errors={errors?.price?.message} />

            <input
                {...register("image", { required: "Image is required!" })}
                placeholder="Image"
            />
            <ErrorMessage errors={errors?.image?.message} />

            <button className="btn">Create</button>
        </form>
    );
};

export default CreateCarForm;
