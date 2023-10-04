import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CarItem from "../home/car-item/CarItem";
import { CarsServices } from "../../services/cars.services";

const CarDetail = () => {
    const { id } = useParams();

    if (!id) return;

    const [car, setCar] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await CarsServices.getById(id);
            setCar(data);
        };
        fetchData();
    }, [id]);

    if (!car.name) return <p>Loading...</p>;

    return (
        <div>
            <Link className="btn" to="/">Back</Link>
            <CarItem item={car} />
        </div>
    );
};

export default CarDetail;
