import React, { useState } from 'react';
import Inputcomp from '../../Components/InputComp';
import FunctionalityComp from '../../Components/FunctionalityComp'
import '../MainPage/MainPage.css'

function MainPage() {
    const [first, setFirst] = useState()
    const [second, setSecond] = useState()
    const [result, setResult] = useState("-")

    const inputValueHandler = (firstval, secondval) => {
        console.log("Got the data", firstval, "ruiytiru ", secondval)
        setFirst(firstval)
        setSecond(secondval)
    }

    const getResult = (result) => {
        setResult(result)
    }

    return (
        <div className="MainPage">
            <div className="InputPart">
                <Inputcomp inputValueHandler={inputValueHandler} />
            </div>
            <div className="FunctionPart">
                <FunctionalityComp first={first} second={second} getResult={getResult} />
            </div>
            <div className="Calculate">
                <div className="TextPart">See Results Below</div>
            </div>
            <div className="DisplayBox">
                <div className="Box">{result ? result : "-"}</div>
            </div>
        </div>
    );
}

export default MainPage;