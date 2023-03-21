import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import List from "../pages/List";
import Detail from "../pages/Detail";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/posts' element={<List />} />
                <Route path='/post/{id}' element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;