import { useState } from "react";


const ItemCount = () => {

    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1)
    }

    const remove = () => {
        if(count > 0){
            setCount(count - 1);
        }else{
        }
    }
    return (
        <div>
            <div>
                <button onClick={remove}>-</button>
                <span>Items: {count}</span>
                <button onClick={add}>+</button>
            </div>
        </div>
    )
}

export default ItemCount;