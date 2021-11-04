import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import Products from "../Item/products.json";

function ItemList({ titulo, category }) {
	const [products, setProducts] = useState([]);

	const getData = (data) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (data) {
					resolve(data);
				} else {
					reject('No se encontró nada');
				}
			}, 1500);
		});

        useEffect(() => {
            getData(Products)
                .then((res) =>
                    category
                        ? setProducts(
                                res.filter(
                                    (product) => product.category === category
                                ))
                        : setProducts(Products)
                )
                .catch((err) => console.log(err));
        }, [category]);
        console.log(products.length);

        return (
            <section className='itemListContainer'>
                <h1 className='title'>{titulo}</h1>
                <div className='itemListContainer-container'>
                    {products.length ? (
                        products.map((product) => (
                            <Item
                                key={product.id}
                                id={product.id}
                                img={product.img}
                                name={product.name}
                                price={product.price}
                            />
                        ))
                    ) : ("Cargando...")}
                </div>
            </section>
        );
}

export default ItemList;