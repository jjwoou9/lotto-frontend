import React, { useState, useEffect } from "react";
import axios from "axios";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { GNBDiv, FooterDiv } from "../Style/MainCSS.js";
import List from "./List";

function Main() {

    const [lottoList, setLottoList] = useState([]);

    useEffect(() => {
        console.log('main')
        axios
            .get("/api/lotto/list?count=10",)
            .then((response) => {
                // console.log('list ', response);
                console.log('data ', response.data);
                setLottoList([...response.data]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return (
        <div>
            MAIN MAIN
            <List lottoList={lottoList} />
        </div>
    );
}

export default Main;
