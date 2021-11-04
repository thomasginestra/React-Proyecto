import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import Products from "../Item/products.json";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';


const ItemDetailContainer = () => {
	const [itemDetail, setItemDetail] = useState(null);
	const { itemId } = useParams();

	const getItem = (data) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (data) {
					resolve(data);
				} else {
					reject('No se encontró nada');
				}
			}, 2000);
		});

        useEffect(() => {
            getItem(Products)
            .then((res) => {
                setItemDetail(res.find((details) => details.id === itemId));
            })
            .catch((err) => console.log(err));
        }, [itemId]);

        console.log(itemDetail);

return(
<div className='itemDetailContainer'>
			{itemDetail ? (
				<ItemDetail
					key={itemDetail.id}
					img={itemDetail.img}
					category={itemDetail.category}
					name={itemDetail.name}
					description={itemDetail.description}
					price={itemDetail.price}
				/>
			) : ("Cargando...")}
		</div>
)
}

export default ItemDetailContainer;

