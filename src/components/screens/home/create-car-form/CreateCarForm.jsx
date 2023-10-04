import React from "react";
import styles from "./CreateCarForm.module.css";
import { useForm } from "react-hook-form";

const CreateCarForm = ({ setCars }) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const createCar = (data) => {
        setCars((prev) => [{ id: prev.length + 1, ...data }, ...prev]);
        reset();
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
