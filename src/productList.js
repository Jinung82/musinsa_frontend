import React, {useEffect, useState} from "react";
import axios from "axios";
import App from "./App.css";

function ProductList () {
    const [inputData, setInputData] = useState(null);
    const [totalPrice, setTotalPrice] = useState(null);

    const getProductInfo = async ()=> {
        try {
            const response = await axios.get('/api/products/all')
            const productInfo = response.data.카테고리정보.map((product) => {
                return {
                    category: product.category,
                    brand: product.brand,
                    price: product.price,
                };
            });
            const totalPrice = response.data.총액;

            setTotalPrice(totalPrice);
            setInputData(productInfo);
        }catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getProductInfo();
    }, []);
    return(
        <div className="App">
            <h2 align={"center"}>카테고리별 프로덕트 최저가</h2>
            <div>
                <table className="App" border={1} align={"center"}>

                    <th>카테고리</th>
                    <th>브렌드</th>
                    <th>가격</th>
                    <tbody>
                    {inputData &&
                        inputData.map(rowData => (
                            <tr>
                                <td>
                                    {rowData.category}
                                </td>
                                <td>
                                    {rowData.brand}
                                </td>
                                <td>
                                    {rowData.price}
                                </td>
                            </tr>
                        ))
                    }
                    <tr><td colSpan={2}> 총액</td><td>{totalPrice}</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ProductList;
