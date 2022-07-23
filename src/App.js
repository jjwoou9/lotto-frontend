import React, {useState, useEffect} from "react";
import axios from "axios";
import './App.css';
import { Routes, Route } from "react-router-dom";

import Heading from "./Component/Heading";
import Main from "./Component/Main";



function App() {

    return (
        <>
            <Heading />
            <Routes>
                    <Route path="/" element={<Main />} />
            </Routes>
        </>
    );
}

export default App;
