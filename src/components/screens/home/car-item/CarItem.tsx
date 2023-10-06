import styles from "../Home.module.css";
import { Link } from "react-router-dom";
import Price from "./Price";
import { ICar } from "../../../../types/car.interface";

const CarItem = ({ item }: { item: ICar }) => {
    return (
        <div key={item.id} className={styles.item}>
            <div
                className={styles.img}
                style={{
                    backgroundImage: `url(${item.image})`,
                }}
            ></div>
            <div className={styles.info}>
                <h2>{item.name}</h2>
                <Price price={item.price} />
                <Link className="btn" to={`/car/${item.id}`}>
                    Read more
                </Link>
            </div>
        </div>
    );
};

export default CarItem;
