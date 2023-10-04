import React from "react";
import CarItem from "../home/car-item/CarItem";

const Catalog = ({ data }) => {
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
