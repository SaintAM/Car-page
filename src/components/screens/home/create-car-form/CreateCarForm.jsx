import React, { useState } from "react";
import styles from "./CreateCarForm.module.css";

const CreateCarForm = ({ setCars }) => {
    const clearData = {
        name: "",
        price: "",
        image: "",
    };
    const [data, setData] = useState(clearData);

    const createCar = (e) => {
        e.preventDefault();
        setCars((prev) => [{ id: prev.length + 1, ...data }, ...prev]);
        setData(clearData);
    };

    return (
        <div className={styles.form}>
            <input
                placeholder="Name"
                value={data.name}
                onChange={(e) =>
                    setData((prev) => ({ ...prev, name: e.target.value }))
                }
            />
            <input
                placeholder="Price"
                value={data.price}
                onChange={(e) =>
                    setData((prev) => ({ ...prev, price: e.target.value }))
                }
            />
            <input
                placeholder="Image"
                value={data.image}
                onChange={(e) =>
                    setData((prev) => ({ ...prev, image: e.target.value }))
                }
            />
            <button className="btn" onClick={(e) => createCar(e)}>
                Create
            </button>
        </div>
    );
};

export default CreateCarForm;
