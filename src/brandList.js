import React, {useEffect, useState} from "react";
import axios from "axios";
import App from "./App.css";

function BrandList () {
    const [inputData, setInputData] = useState(null);
    const [totalPrice, setTotalPrice] = useState(null);
    const [brand, setBrand] = useState(null);

    const getProductInfo = async ()=> {
        try {
            const response = await axios.get('/api/products/brand')
            const productInfo = response.data.최저가.카테고리.map((product) => {
                return {
                    category: product.카테고리,
                    price: product.가격,
                };
            });
            const brand = response.data.최저가.브렌드;
            const totalPrice = response.data.최저가.총액;

            setBrand(brand)
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
                    <tr>
                        <th colSpan={2}>브렌드 : {brand}</th>
                    </tr>
                    <tr>
                        <th>카테고리</th>
                        <th>가격</th>
                    </tr>
                    <tbody>
                    {inputData &&
                        inputData.map(rowData => (
                            <tr>
                                <td>
                                    {rowData.category}
                                </td>
                                <td>
                                    {rowData.price}
                                </td>
                            </tr>
                        ))
                    }
                    <tr><td> 총액</td><td>{totalPrice}</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default BrandList;
