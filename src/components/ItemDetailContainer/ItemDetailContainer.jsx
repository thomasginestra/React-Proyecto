import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import Productos from "../../data/products.json";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
	const { itemId } = useParams();
	const [itemDetail, setItemDetail] = useState(null);

	const getItem = (data) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			if (data) {
				resolve(data);
			} else {
			reject("No se encontró nada");
		}
	}, 2000);
});

	useEffect(() => {
		getItem(Productos)
		.then((res) => {
			setItemDetail(res.find((details) => details.id === itemId));
		})
		.catch((err) => console.log(err));
	}, [itemId]);
	return (
	<div className="container-articles">
		{itemDetail ? <ItemDetail item={itemDetail} /> : "Cargando..."}
		</div>
		);
	};

export default ItemDetailContainer;