import './App.css'
import Rating from "./components/Rating/index.jsx";
import React, {useEffect, useState} from "react";
import ThankYou from "./components/ThankYou";

function App() {
    const [rate, setRate] = useState(0);
    const [isSubmit, setIsSubmit] = useState(false);

    return (
        <div className="App">
            {
                isSubmit
                    ?
                    <ThankYou rate={rate}/>
                    :
                <Rating setRate={setRate} setIsSubmit={setIsSubmit}/>
            }
        </div>
    )
}

export default App
