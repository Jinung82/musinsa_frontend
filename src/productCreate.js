import React, { useState } from "react";
import axios from "axios";
import {redirect} from "react-router-dom";

function ProductCreate() {
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");

    const categoryHandler = (e) => {
        e.preventDefault();
        setCategory(e.target.value);
    };

    const brandHandler = (e) => {
        e.preventDefault();
        setBrand(e.target.value);
    };
    const priceHandler = (e) => {
        e.preventDefault();
        const onlyNumber = e.target.value.replace(/[^0-9]/g, '')
        setPrice(onlyNumber);
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        let body = {
            category: category,
            brand: brand,
            price: price,
        };

       await axios
            .post("/api/product/save", body)
            .then((res) => alert(res.data));
        window.location.replace('/product');
    };

    return (
        <>
            <div>
                <h2 align={"center"}>카테고리 저장 하기</h2>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >

                <form
                    onSubmit={submitHandler}
                    style={{ display: "flex", flexDirection: "Column" }}
                >
                    <label><b>아래 카테고리만 사용가능 합니다.</b> <br/>
                        ('상의', '아우터', '바지', '스니커즈', '가방', '모자', '양말', '액세서리') <br/>카테고리 </label>
                    <input type="category" value={category} onChange={categoryHandler}></input>
                    <label>브렌드</label>
                    <input
                        type="brand"
                        value={brand}
                        onChange={brandHandler}
                    ></input>
                    <label>가격(숫자만 입력 가능 합니다.)</label>
                    <input
                        type="price"
                        value={price}
                        onChange={priceHandler}
                    ></input>
                    <button type="submit">저장</button>
                </form>
            </div>
        </>
    );
};

export default ProductCreate;
