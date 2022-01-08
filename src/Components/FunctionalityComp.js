import { useEffect, useState } from 'react';
import './FunctionalityComp.css'

function FunctionalityComp(props) {

    const [result, setResult] = useState()

    const onClickHandler = (e) => {
        const value = e.target.value
        console.log("value is", value)
        switch (value) {
            case "add":
                setResult(props.first + props.second);
                break;
            case "sub":
                setResult(props.first - props.second);
                break;
            case "mul":
                setResult(props.first * props.second);
                break;
            case "div":
                setResult(props.first / props.second);
                break;
            default:
                setResult("-")
        }
    }

    useEffect(() => {
        props.getResult(result)
    }, [result, props])

    console.log("result", result)
    return (
        <div className="FunctionComp">
            <button onClick={onClickHandler} className="funbtn" value="add">+</button>
            <button onClick={onClickHandler} className="funbtn" value="sub">-</button>
            <button onClick={onClickHandler} className="funbtn" value="mul">x</button>
            <button onClick={onClickHandler} className="funbtn" value="div">/</button>
        </div>
    );
}

export default FunctionalityComp;