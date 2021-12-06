import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../contexts/cart/CartContext";

const ItemDetail = ({ item }) => {
    const { addToCart } = useContext(CartContext);

    const url = "https://raw.githubusercontent.com/thomasginestra/React-Proyecto/main/public/assets/media/";

    return (
        <section className="card" data-key={item.id}>
            {item ? (
            <>
            <img src={url + item.img} alt="" />
            <div className="sub-card">
                <Link to={`/item/${item.id}`} className="card-title">
                    {item.name}
                </Link>
                <p className="card-description">{item.description}</p>
                <p>{item.category}</p>
                <div className="card-price">
                    <span className="card-price-monto">${item.price}</span>
                </div>
                <ItemCount initial="0" item={item} />
                </div>
                </>
                ) : (
            "Cargando datos..."
            )}
        </section>
    );
}

export default ItemDetail;