import ItemCount from "../ItemCount/ItemCount";

const ItemList = ({ items }) => {
    return (
    <>
        <div className="card">
        <img src={items.img} alt="" />
        <div className="sub-card">
            <h3 href="#" className="card-titulo">{items.title}</h3>
            <div className="card-price">
            <span className="card-price-monto">{items.price}$</span>
            </div>
            <ItemCount/>
        </div>
        </div>
    </>
    );
};

export default ItemList;