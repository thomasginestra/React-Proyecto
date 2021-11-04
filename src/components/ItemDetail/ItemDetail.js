import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

function ItemDetail({
    img,
    category,
    name,
    description,
    price,
}) {
    return (
    <section className="itemDetail">
        <article className="itemDetail-card">
            <img className="itemDetail-img" src={img} alt="{name}" />
            <div className="itemDetail-info">
                <h1>{name}</h1>
                <p className="itemDetail-category">{category}</p>
                <ItemCount />
                <p>{price}</p>
                <p className="itemDetail-description">{description}</p>
                <Link to={`/`}>
                    <button>Volver</button>
                </Link>
            </div>
        </article>
    </section>
    );
}

export default ItemDetail;
