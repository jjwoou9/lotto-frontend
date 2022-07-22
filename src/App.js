import React, {useState, useEffect} from "react";
import axios from "axios";
import logo from './logo.svg';
import './App.css';

function App() {

    const [lottoList, setLottoList] = useState([]);

    useEffect(() => {
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
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                    리액트
                <h2> 최근 lotto list</h2>
                {lottoList.map((lotto, idx) => {
                    return (
                        <div key={idx}>
                            <p>{lotto.round}</p>
                            <p>{lotto.first}</p>
                        </div>
                    )
                })}
            </header>

        </div>
    );
}

export default App;
