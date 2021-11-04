import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router';

function ItemListContainer({ gretting }) {
	return <ItemList titulo={gretting} />;
}

export default ItemListContainer;