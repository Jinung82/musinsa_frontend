import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from "./productList";
import Main from "./Main";
import BrandList from "./brandList";
import CategoryList from "./categoryList";
import ProductCreate from "./productCreate";
import ProductUpdate from "./productUpdate";
import ProductDelete from "./productDelete";

const App = () => {
  return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/product/" element={<ProductList />}></Route>
            <Route path="/brand/" element={<BrandList />}></Route>
            <Route path="/category/" element={<CategoryList />}></Route>
            <Route path="/productCreate/" element={<ProductCreate />}></Route>
            <Route path="/productUpdate/" element={<ProductUpdate />}></Route>
            <Route path="/productDelete/" element={<ProductDelete />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
};

export default App;
