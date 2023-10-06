import { FC } from "react";
import { ICar } from "../../../types/car.interface";
import CarItem from "../home/car-item/CarItem";

interface ICatalog {
    data: ICar[];
}
const Catalog: FC<ICatalog> = ({ data }) => {
    return (
        <>
            {data.length ? (
                data.map((item) => <CarItem key={item.id} item={item} />)
            ) : (
                <h2>There are no cars</h2>
            )}
        </>
    );
};

export default Catalog;
