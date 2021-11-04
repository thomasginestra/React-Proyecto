import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


function Item ({
    img,
    name,
    price,
}) {

    return (
        <section className="item">
            <div>
                <img className="item-img" src={img} alt="{name}" />
            </div>
            <h3 className='item-title'>{name}</h3>
            <ItemCount/>
            <div>
				<span className='item-price'>${(price)}</span>
			</div>
        </section>
    );
}

export default Item;