"use client"

import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/productSlice";

const ProductS = () => {
    const productList = useSelector((data: any) => data.productData.products);
    console.log("productList", productList)
    const dispatch = useDispatch();
    const addProducts = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const price = Number(formData.get('price'));
        const productType = formData.get('productType') as string; // Get the category directly
        console.log({ name, price, productType }); // Log the simplified product
        dispatch(addProduct({ product: { name, price, productType } }))
    };

    return (
        <div>
            <form onSubmit={addProducts}>
                <input type="text" name="name" placeholder="Product name" required />
                <input type="number" name="price" placeholder="Price" required />
                <select name="productType" required>
                    <option value="tech">Tech</option>
                    <option value="food">Food</option>
                    <option value="study">Study</option>
                </select>
                <button type="submit">Add Product</button>
            </form>

            {/* Display the product details */}
            <h2>Product Details:</h2>
            {productList.length ? productList.map((item: any) => (<div>
                <p>Name: {item.name}</p>
                <p>Price: ${item.price}</p>
                <p>Type: {item.productType}</p>
                <hr />
            </div>)) : null
            }
        </div>
    );
};

export default ProductS;
