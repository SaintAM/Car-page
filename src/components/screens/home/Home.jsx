import React, { useEffect, useState } from "react";
import { CarsServices } from "../../services/cars.services";
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CreateCarForm";
import styles from "./Home.module.css";

const Home = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setCars(await CarsServices.getAll());
        };
        fetchData();
    }, []);
    return (
        <div className={styles.wrapper}>
            <h1>Cars catalog</h1>
            <CreateCarForm setCars={setCars} />
            {cars.map((item) => (
                <CarItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Home;
