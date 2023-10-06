import { CarsServices } from "../../services/cars.services";
import CreateCarForm from "./create-car-form/CreateCarForm";
import styles from "./Home.module.css";
import { useQuery } from "@tanstack/react-query";
import Catalog from "../ui/Catalog";

const Home = () => {
    const { data, isLoading } = useQuery(["cars"], () => CarsServices.getAll());

    if (isLoading) return <p>Loading...</p>;
    if (data === undefined) return;

    return (
        <div className={styles.wrapper}>
            <h1>Cars catalog</h1>
            <CreateCarForm />
            <Catalog data={data} />
        </div>
    );
};

export default Home;
