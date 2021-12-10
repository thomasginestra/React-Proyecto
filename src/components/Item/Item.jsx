import { Link } from "react-router-dom";
import React from "react";

function Item({ item }) {

    const url = "https://raw.githubusercontent.com/thomasginestra/React-Proyecto/main/public/assets/media/";

    return (
        <article className="card" data-key={item.id}>
            <img src={url + item.img} alt="" />
            <div className="sub-card">
                <Link to={`/item/${item.id}`} className="card-title">
                    {item.name}
                </Link>
                <div className="card-price">
                    <span className="card-price-monto">${item.price}</span>
                </div>
            </div>
        </article>
    );
}

export default Item;