import React from 'react';
import { Link } from 'react-router-dom';
import App from "./App.css";

const Main = (props) => {
    return (
        <div                 style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
        }}
        >
            <ul>
                <h2> 무신사 과제 제출</h2>
                <li><Link to="/product" ><h2>1. 프로덕트 최저가 정보</h2> </Link></li>
                <li><Link to="/brand" ><h2>2. 브렌드 최저가 정보</h2> </Link></li>
                <li><Link to="/category/" ><h2>3. 카테고리별 최저가 정보</h2> </Link></li>
                <li><Link to="/productCreate/" ><h2>4. 카테고리 생성</h2> </Link></li>
                <li><Link to="/productUpdate/" ><h2>5. 카테고리 수정</h2> </Link></li>
                <li><Link to="/productDelete/" ><h2>6. 카테고리 삭제</h2> </Link></li>
            </ul>
        </div>
    );
};

export default Main;
