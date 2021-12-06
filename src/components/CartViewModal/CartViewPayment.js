import { addDoc, getFirestore, collection, } from "@firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart/CartContext";
import { Form } from "./Form";

const initialForm = {
name: "",
email: "",
phone: "",
};

const validationsForm = (form) => {
let errors = {};
let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
let regexPhone = /[0-9\s]/;

if (!form.name.trim()) {
    errors.name = "Completa el nombre.";
} else if (!regexName.test(form.name.trim())) {
    errors.name = "Solo puedes ingresar letras y espacios en blanco.";
}
if (!form.email.trim()) {
    errors.email = "Completa el mail.";
} else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El Email es incorrecto";
}
if (!form.phone.trim()) {
    errors.phone = "Completa el telefono.";
} else if (!regexPhone.test(form.phone.trim())) {
    errors.phone = "Solo puedes ingresar numeros";
}

return errors;
};
export default function CartViewPayment({ isOpen, closeModal }) {
const { form, errors, handleChange, handleBlur } = Form(initialForm, validationsForm);

const [already, setAlready] = useState(false);
const [loading, setLoading] = useState(false);
const [response, setResponse] = useState(null);
const [order, setOrder] = useState(null);

const { cart, clearCart } = useContext(CartContext);
const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

const sendOrder = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0 && cart.length) {
    setLoading(true);
    setAlready(true);

    const order = { buyer: { name: form.name, phone: form.phone, email: form.email }, items: { ...cart }, total: totalPrice };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    // updateDoc(biciDoc, { total: 150 });
    addDoc(ordersCollection, order)
        .then(({ id }) => {
        setOrder(id);
        })
        .then(
        setTimeout(() => {
            setLoading(false);
            setResponse(true);
            setAlready(false);
        }, 2000)
        );
    clearCart();
    } else {
    return;
    }
};
return (
    <>
    <div className={`overlay ${isOpen && "is-visible"}`} id="overlay" onClick={closeModal}></div>
    <div id="modal-payment" className={` ${isOpen && "modal-payment-animation is-visible"}`}>
        <div className={`${response && "modal-payment-nav"}`}>
        {response && <span>Orden realizada con exito! El numero de su orden es: {order}</span>}
        <div className="flex-center">
            {/* <span>
            Pago de <span id="total-payment">$</span>
            </span> */}
            <button className="btn-cerrar-payment" id="closePayment" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}>
                <path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"></path>
            </svg>
            </button>
        </div>
        </div>
        <div className={`modal-payment-form ${loading && "active"}`}>
        <form>
            <div style={{ margin: "2rem" }}>
            <div className="flex-column" id="num-card-error">
                <span>Nombre</span>
                <input type="text" name="name" onBlur={handleBlur} onChange={handleChange} value={form.name} required maxLength="19" />
                {errors.name && <p className="payment-error">{errors.name}</p>}
            </div>
            <div className="flex-column" id="name-card-error">
                <span>Email</span>
                <input type="email" name="email" onBlur={handleBlur} onChange={handleChange} value={form.email} required maxLength="40" />
                {errors.email && <p className="payment-error">{errors.email}</p>}
            </div>
            <div>
                <div>
                <span>Número de telefono</span>
                <input type="text" name="phone" required onBlur={handleBlur} onChange={handleChange} value={form.phone} />
                {errors.phone && <p className="payment-error">{errors.phone}</p>}
                </div>
            </div>
            </div>
            <button className="modal-payment-completeBtn" id="btn-payment-complete" onClick={sendOrder}>
            Completar pago
            </button>
        </form>
        </div>

        <div className={`modal-payment-succes ${already && "active"}`}>
        <div className="loading">
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
    </div>
    </>
);
}