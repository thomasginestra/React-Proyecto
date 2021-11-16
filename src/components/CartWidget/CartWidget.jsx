import { useContext } from "react";
import { CartContext } from "../../contexts/cart/CartContext";

const CartWidget = () => {
const { cart } = useContext(CartContext);

// Se saca el total de los items sumando los quantity
const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

return (
    <>
    <div className="counter-container">
        {totalItems > 0 && <span id="counter">{totalItems}</span>}
        <button className="btn-carrito" id="btn-carrito">
            <i className="fas fa-shopping-cart"></i>
        </button>
    </div>
    </>
);
};

export default CartWidget;