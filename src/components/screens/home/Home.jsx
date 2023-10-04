import React, { useEffect, useState } from "react";
import { CarsServices } from "../../services/cars.services";
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CreateCarForm";
import styles from "./Home.module.css";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
    const {data, isLoading, error} = useQuery(['cars'], () => CarsServices.getAll())

    if(isLoading) return <p>Loading...</p>
    return (
        <div className={styles.wrapper}>
            <h1>Cars catalog</h1>
            <CreateCarForm />
            {data.map((item) => (
                <CarItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Home;
