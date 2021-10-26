import ItemList from "../ItemList/ItemList";
import Productos from "../Item/products.json";

    const ItemListContainer = ({ greeting }) => {
        return (
        <div className="container-articles">
            {Productos ? Productos.map(producto => <ItemList items={producto} key={producto.id}/>) : "Loading..."}
        </div>
        );
    };

export default ItemListContainer;