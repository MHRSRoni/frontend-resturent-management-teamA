import { Button } from "react-bootstrap";
import { useLoaderData } from "react-router";


const DetailsProduct = () => {

    const detail = useLoaderData();
    // let { userId } = useParams();

    const { calaory, category, description, price, title } = detail.data;


    return (
        <div>

            <p>{title}</p>
            <p>{description}</p>
            <p>{price}</p>
            <p>{calaory}</p>
            <p>{category}</p>

            <Button variant="outline-warning text-dark">+ Add to Wish List</Button>
            <Button variant="outline-warning text-dark">+ Add to Cart</Button>
        </div>
    );
};

export default DetailsProduct;