import React, {useState, useEffect} from "react";
import axios from "axios";
import './App.css';
import {Routes, Route} from "react-router-dom";

import Heading from "./Component/Heading";
import Main from "./Component/Main";
import Upload from "./Component/Upload";


function App() {

    return (
        <>
            <Heading/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/upload" element={<Upload/>}/>
            </Routes>
        </>
    );
}

export default App;
