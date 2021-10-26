import { useEffect, useState } from "react";
import Productos from "./products.json";

const Item = ({ item }) => {
    const [products, setProducts] = useState ([]);

    const getData = (data) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data) {
                resolve(data);
            } else {
                reject("ERROR: Reject");
            }
        }, 3000);
    });

    console.log(products);

    useEffect(() => {
        getData(products)
        .then((res) => setProducts(res))
        .catch((err) => console.log(err));
    }, [])

    return(
        <>
        </>
    )
};

export default Item;