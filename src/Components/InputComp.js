import React, { useState, useEffect } from 'react';
import './InputComp.css'

function Inputcomp(props) {
    const [firstval, setFirstval] = useState()
    const [secondval, setSecondval] = useState()

    const onChangeHandlerFirst = (e) => {
        setFirstval(parseInt(e.target.value))
    }

    const onChangeHandlerSecond = (e) => {
        setSecondval(parseInt(e.target.value))
    }

    useEffect(() => {
        props.inputValueHandler(firstval, secondval)
    }, [firstval, secondval, props])

    console.log("firstval", firstval)
    console.log("secondval", secondval)

    return (
        <div className="InputComp">
            <input type='number' value={firstval} onChange={onChangeHandlerFirst} />
            <input type='number' value={secondval} onChange={onChangeHandlerSecond} />
        </div>
    );
}

export default Inputcomp;