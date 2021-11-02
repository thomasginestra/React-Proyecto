import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';



    const ItemDetail = ({ item }) => {
        return (
        <>
            <div className="card-details">
            {item ? (
                <>
                <img className="card-img" src={item.img} alt="" />
                <div className="sub-card">
                    <h1>{item.name}</h1>
                    <ItemCount/>
                    <p>{item.price}</p>
                    <p className="card-description">{item.description}</p>
                </div>
                </>
            ) : (
                "Cargando datos..."
            )}
            </div>
        </>
        );
    };

    export default ItemDetail;