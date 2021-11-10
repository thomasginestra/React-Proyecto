import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router";

const ItemListContainer = ({ greeting }) => {
	const { categoryId } = useParams();

	return <ItemList title={greeting} category={categoryId} />;
};

export default ItemListContainer;