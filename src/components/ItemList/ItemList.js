import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";

const ItemList = ({items, key}) =>{
    return(
        <>
            <Item/>
            <div className="card">
                <img src={items.imgSrc} alt="" />
                <div className="sub-card">
                    <a href="#" className="card-title">{items.name}</a>
                    <p className="card-category">{items.category}</p>
                    <div className="card-price">
                        <span className="card-price-monto">{items.price}</span>
                    </div>
                    <ItemCount/>
                </div>
            </div>
        </>
    )
}

export default ItemList;