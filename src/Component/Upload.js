import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
    UploadDiv,
    UploadForm,
    UploadButtonDiv,
} from "../Style/UploadCSS.js";
import axios from "axios";

function Upload() {

    const [Round, setRound] = useState("");
    const [WinnerCnt, setWinnerCnt] = useState("");
    const [PrizeMoney, setPrizeMoney] = useState("");
    const [First, setFirst] = useState("");
    const [Second, setSecond] = useState("");
    const [Third, setThird] = useState("");
    const [Fourth, setFourth] = useState("");
    const [Fifth, setFifth] = useState("");
    const [Sixth, setSixth] = useState("");
    const [Bonus, setBonus] = useState("");

    let navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        let param = {
            round: Round,
            winnerCnt: WinnerCnt,
            prizeMoney: PrizeMoney,
            first: First,
            second: Second,
            third: Third,
            fourth: Fourth,
            fifth: Fifth,
            sixth: Sixth,
            bonus: Bonus,
        };

        axios
            .post("/api/lotto/", param)
            .then((response) => {
                // navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <UploadDiv>
            <UploadForm>
                <label htmlFor="label"> 회차 </label>
                <input
                    id="round"
                    type="number"
                    value={Round}
                    onChange={(e) => {
                        setRound(e.currentTarget.value);
                    }}
                />

                <label htmlFor="label"> 당첨자수 </label>
                <input
                    id="winnerCnt"
                    type="number"
                    value={WinnerCnt}
                    onChange={(e) => {
                        setWinnerCnt(e.currentTarget.value);
                    }}
                />

                <label htmlFor="label"> 당첨금 </label>
                <input
                    id="prizeMoney"
                    type="number"
                    value={PrizeMoney}
                    onChange={(e) => {
                        setPrizeMoney(e.currentTarget.value);
                    }}
                />

                <label htmlFor="label"> 번호1 </label>
                <input
                    id="first"
                    type="number"
                    value={First}
                    onChange={(e) => {
                        setFirst(e.currentTarget.value);
                    }}
                />

                <label htmlFor="label"> 번호2 </label>
                <input
                    id="second"
                    type="number"
                    value={Second}
                    onChange={(e) => {
                        setSecond(e.currentTarget.value);
                    }}
                />

                <label htmlFor="label"> 번호3 </label>
                <input
                    id="third"
                    type="number"
                    value={Third}
                    onChange={(e) => {
                        setThird(e.currentTarget.value);
                    }}
                />

                <label htmlFor="label"> 번호4 </label>
                <input
                    id="fourth"
                    type="number"
                    value={Fourth}
                    onChange={(e) => {
                        setFourth(e.currentTarget.value);
                    }}
                />

                <label htmlFor="label"> 번호5 </label>
                <input
                    id="fifth"
                    type="number"
                    value={Fifth}
                    onChange={(e) => {
                        setFifth(e.currentTarget.value);
                    }}
                />

                <label htmlFor="label"> 번호6 </label>
                <input
                    id="sixth"
                    type="number"
                    value={Sixth}
                    onChange={(e) => {
                        setSixth(e.currentTarget.value);
                    }}
                />

                <label htmlFor="label"> 보너스 </label>
                <input
                    id="bonus"
                    type="number"
                    value={Bonus}
                    onChange={(e) => {
                        setBonus(e.currentTarget.value);
                    }}
                />


                <UploadButtonDiv>
                    <button
                        onClick={(e) => {
                            onSubmit(e);
                        }}
                    >
                        등록
                    </button>
                </UploadButtonDiv>
            </UploadForm>
        </UploadDiv>
    );
}

export default Upload;
