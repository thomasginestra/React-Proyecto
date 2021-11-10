import { useState } from "react";
import { Link } from "react-router-dom";
const ItemCount = ({ stock, initial, onAdd, id }) => {
const [count, setCount] = useState(parseInt(initial));

const add = () => {
    if (stock <= 0) {
    console.log("No hay stock, proximamente el error será mostrado en la página");
    } else if (count < stock) {
    setCount(count + 1);
    } else if (count >= stock) {
    console.log("Llegaste al limite del stock disponible.");
    }
};

const remove = () => {
    if (count > 1) {
    setCount(count - 1);
    } else {
    console.log("No se pueden poner numeros negativos ni 0");
    }
};

const handleClick = (e) => {
    e.preventDefault();
    if (count !== 0) {
    onAdd(count);
    }
};

return (
    <>
    <div className="counter">
        <button className="btn-counter" onClick={remove}>-</button>
        <span>{count}</span>
        <button className="btn-counter" onClick={add}>+</button>
    </div>
    <Link to="/cart">
        <button className="addTest" onClick={handleClick} data-key={id}>
        Agregar al carrito
        </button>
    </Link>
    </>
);
};

export default ItemCount;