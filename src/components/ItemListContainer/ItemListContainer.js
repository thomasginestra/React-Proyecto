import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Productos from "../Item/products.json";


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState(null);

    const getData = (data) =>
    new Promise((resolve, reject) => {
    setTimeout(() => {
        if (data) {
        resolve(data);
        } else {
        reject("ERROR: Reject");
        }
    }, 1000);
    });

    useEffect(() => {
        getData(Productos)
        .then((res) => setProducts(res))
        .catch((err) => console.log(err));
    }, []);

    return (
        <div className="container-articles">
        {products
            ? products.map((producto) => (
                <ItemList items={producto} key={producto.id} />
            ))
            : "Cargando..."}
        </div>
    );
};

export default ItemListContainer;