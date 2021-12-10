import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {

    const url = "https://raw.githubusercontent.com/thomasginestra/React-Proyecto/main/public/assets/media/";

    return (
        <section className="card-detail" data-key={item.id}>
            {item ? (
            <>
            <img src={url + item.img} alt="" />
            <div className="sub-card">
                <Link to={`/item/${item.id}`} className="card-title-detail">
                    {item.name}
                </Link>
                <p className="card-description">{item.description}</p>
                <p className="card-category">{item.category}</p>
                <div className="card-price-detail">
                    <span className="card-price-monto-detail">${item.price}</span>
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