import React, {useEffect, useState} from "react";
import axios from "axios";

function CategoryList () {
    const [minInputData, setMinInputData] = useState(null);
    const [maxInputData, setMaxInputData] = useState(null);
    const [category, setCategory] = useState(null);
    const [categoryName, setCategoryName] = useState("");

    const categoryHandler = (e) => {
        e.preventDefault();
        setCategoryName(e.target.value);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        getProductInfo(categoryName);

    };

    const getProductInfo = async (categoryName)=> {
        if(categoryName == null){
            categoryName = "상의";
        }
        try {
            const response = await axios.get('/api/products/category/'+ categoryName)
            const minProductInfo = JSON.stringify(response.data.최저가);
            const maxProductInfo = JSON.stringify(response.data.최고가);
            const category = response.data.카테고리;

            setCategory(category);
            setMinInputData(minProductInfo);
            setMaxInputData(maxProductInfo);
        }catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
        getProductInfo();
    }, []);
    return(
        <div className="App">
            <h2 align={"center"}>카테고리별 프로덕트 최저가, 최고가</h2>
            <div>
                <table className="App" border={1} align={"center"}>
                    <tr>
                        <td>
                            <form onSubmit={submitHandler}>
                                <label>카테고라</label>
                                <input type ="categoryName" onChange={categoryHandler}/>
                                <button type="submit">조회</button>
                            </form>

                        </td>
                    </tr>
                </table>
                <table className="App" border={1} align={"center"}>
                    <thead>
                    <tr>
                        <th colSpan={2}>카테고리 : {category}</th>
                    </tr>
                        <tr>
                            <th>최저가</th>
                            <th>최고가</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td>
                                    {minInputData}
                                </td>
                                <td>
                                    {maxInputData}
                                </td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default CategoryList;
