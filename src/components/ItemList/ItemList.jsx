import { useEffect, useState } from "react";
import Productos from "../../data/products.json";
import Item from "../Item/Item";

const ItemList = ({ title, category }) => {
    const [products, setProducts] = useState([]);

    const getData = (data) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data) {
                resolve(data);
            } else {
                reject("No se encontró nada");
            }
        }, 1500);
    });

useEffect(() => {
    getData(Productos)
    .then((res) => (category ? setProducts(res.filter((product) => product.category === category)) : setProducts(Productos)))
    .catch((err) => console.log(err));
}, [category]);
    return (
        <>
            <section className="container-articles">
            {products.length ? <h1 className="container-title">{title}</h1> : null}
            {products.length ? products.map((producto) => <Item item={producto} />) : "Cargando...."}
        </section>
        </>
    );
};

export default ItemList;
