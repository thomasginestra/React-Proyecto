import ItemCount from '../ItemCount/ItemCount';



const Item = ({ productos }) => {

    return (
        <>
            <div className="cardComponent">
                <div className="imgCard">
                    <img src={productos.img} alt="imagen de prueba" />
                </div>
                <h3>{productos.name}</h3>
                <p>{productos.price}</p>
                <ItemCount/>
                <div className="addToCart">Agregar al carrito</div>
                <button>Ver detalles</button>
            </div>
        </>
    );
}

export default Item;