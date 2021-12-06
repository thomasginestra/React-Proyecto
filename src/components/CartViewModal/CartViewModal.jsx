import { useContext } from "react";
import { CartContext } from "../../contexts/cart/CartContext";
import { CartViewFunction } from "./CartViewFunction";
import ItemModal from "../ItemModal/ItemModal";
import CartViewPayment from "./CartViewPayment.js";

const CartViewModal = ({ isOpen, closeModal }) => {
const { cart, clearCart } = useContext(CartContext);

// Se saca el total de los items sumando los quantity
const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

const [isOpenPayment, openModalPayment, closeModalPayment] = CartViewFunction(false);

return (
    <>
    <div className={`overlay ${isOpen && !isOpenPayment && "is-visible"}`} id="overlay" onClick={closeModal}></div>
    <div
        className={`modalCarrito ${isOpen || "carritoClose"} ${isOpen && !isOpenPayment && "is-visible carritoAnimation"} ${
        isOpenPayment && "carritoClose"
        }`}
        id="modalCarrito"
    >
        <button className="btn-cerrar-carrito" id="closeCarrito" onClick={closeModal}>
            <i class="fas fa-times"></i>
        </button>
        <div className="container-carrito">
        <span>Tu carrito</span>
        <div className="carrito">
            {cart.length ? (
            <ul id="carrito">
                {" "}
                {cart.map((producto) => (
                <ItemModal item={producto} isOpen={isOpen} key={producto.id} />
                ))}{" "}
            </ul>
            ) : (
            <p id="emptyCart" style={{ display: "block" }}>
                No hay productos en tu carrito
            </p>
            )}
        </div>
        {cart.length ? (<div className="container-carrito-pagar">
            <div className="container-carrito-total">
            <button id="btn-vaciar" className="borrar-itemCarrito" onClick={clearCart}>
                Vaciar carrito
            </button>
            <div>
                <p>
                Total<span id="total">{totalPrice}$</span>
                </p>
            </div>
            </div>
            <div className="container-btn-pagar">
            <button id="btn-payment" className="btn-pagar" onClick={openModalPayment}>
                Continuar con la compra
            </button>
            </div>
        </div>) : null}
        </div>
    </div>
    <CartViewPayment isOpen={isOpenPayment} closeModal={closeModalPayment} />
    </>
);
};

export default CartViewModal;