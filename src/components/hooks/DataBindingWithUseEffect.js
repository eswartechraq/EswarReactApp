import { useEffect, useState } from "react"
export default function LoadAPIData() {
    const [data, loadData] = useState();
    const url = "https://dummyjson.com/products";
    // const url = "https://jsonplaceholder.typicode.com/todos/1";
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const response = await fetch(url);
        const json = await response.json();
        loadData(json?.products);
    }
    return (
        <>
            <table className="products">
                <tbody>
                    <tr>
                        <th>Product Name</th>
                        <th>Discription</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Rating</th>
                    </tr>
                </tbody>
            </table>
            <ul>
                {data && data.map((product, i) => (

                    <tr key={i}>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.discountPercentage}</td>
                        <td>{product.rating}</td>
                    </tr>

                ))}
            </ul>
        </>
    )
}
