import { useContext } from "react";
import { CartContext } from "../../contexts/cart/CartContext";
import { CartViewFunction } from "../CartViewModal/CartViewFunction";
import CartViewModal from "../CartViewModal/CartViewModal";

const CartWidget = () => {
const { cart } = useContext(CartContext);

// Se saca el total de los items sumando los quantity
const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
const [isOpen, openModal, closeModal] = CartViewFunction(false);

return (
    <>
    <div className="counter-container">
        {totalItems !== 0 && <span id="counter">{totalItems}</span>}
        <button className="btn-carrito" id="btn-carrito" onClick={openModal}>
            <i className="fas fa-shopping-cart"></i>
        </button>
    </div>
    <CartViewModal isOpen={isOpen} closeModal={closeModal} />
    </>
);
};

export default CartWidget;