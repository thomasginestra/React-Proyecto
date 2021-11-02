import { useEffect, useState } from "react";
import Productos from "../Item/products.json";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';


const ItemDetailContainer = () => {
    const [item, setItems] = useState({});

    const getData = (data) =>
    new Promise((resolve, reject) => {
    setTimeout(() => {
        if (data) {
        resolve(data);
        } else {
        reject("ERROR: Reject");
        }
    }, 2000);
    });

useEffect(() => {
    getData(Productos)
    .then((res) => setItems(res[0]))
    .catch((err) => console.log(err));
}, []);

return(
    <div className="container-card-details">
        <h3 className="card-title-details">Product Detail Example</h3>
        <ItemDetail item={item} key={item.id} />
    </div>
)
}

export default ItemDetailContainer;