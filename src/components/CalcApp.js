import { useState } from "react";
import "./index.css"

function CalcApp() {
    const [digits, setDigits] = useState([]);
    const [result, setResult] = useState('');

    let finalOutput
    const operators = ['+', '-', '*', '/', '.'];

    function handleClearScreen() {
        setDigits([]);
        setResult('');
    }

    function handleSingleDelete() {
        setDigits(prevDigits => {
            const delDigits = prevDigits.slice(0, -1);
            const operatorCount = delDigits.filter(element => operators.includes(element)).length;
            const lastCharacter = delDigits[delDigits.length - 1];
            const operatorIndex = delDigits.findIndex(char => operators.includes(char));
            try {
                if (operatorCount >= 1 && !isNaN(lastCharacter)) {
                    const finalOutput = eval(delDigits.join('')).toString();
                    setResult(finalOutput);
                } else if (operatorCount <= 1 && isNaN(delDigits[operatorIndex + 1])) {
                    setResult('');
                }
            } catch (error) {
                console.log("Error occurred while evaluating expression");
            }
            return delDigits;
        });
    }


    function handleButtonPress(value) {
        try {
            if (value === '=') {
                console.log("Clicked")
                finalOutput = eval(digits.join('')).toString();
                setDigits([finalOutput]);
                setResult('');
            } else {
                if (operators.includes(digits[digits.length - 1]) && operators.includes(value)) {
                    const newDigits = [...digits.slice(0, -1), value];
                    setDigits(newDigits);
                } else {

                    const newDigits = [...digits, value];
                    setDigits(newDigits);

                    const expression = newDigits.join('');
                    if (isValidExpression(expression)) {
                        finalOutput = eval(expression).toString();
                        setResult(finalOutput);
                    }
                }
            }
        } catch (error) {
            console.log("Awaiting next input")
        }
    }


    // Function to check if an expression is valid (contains at least one operator followed by a number)
    function isValidExpression(expression) {
        const operators = ['+', '-', '*', '/'];
        const operatorIndex = expression.split('').findIndex(char => operators.includes(char));
        return operatorIndex !== -1 && !isNaN(expression[operatorIndex + 1]);
    }


    return (
        <div className="calcArea">
            <DisplayScreen
                inputValue={digits}
                outputValue={result}
            />
            <KeyPad
                handleOnClick={handleButtonPress}
                clearScreen={handleClearScreen}
                singleDelete={handleSingleDelete}
            />
        </div>
    )
}

function DisplayScreen({ inputValue, outputValue }) {
    return (
        <>
            <div className="calc-display">
                <InputRow inputVal={inputValue} />
                <OutputRow outputVal={outputValue} />
            </div>
        </>
    )
}

function InputRow({ inputVal }) {
    return (
        <div className="input-row">
            <>{inputVal}</>
        </div>
    )
}

function OutputRow({ outputVal }) {
    return (
        <div className="output-row">
            <>{outputVal}</>
        </div>
    )
}

function NumButtons({ value, onButtonPress }) {
    return (
        <button
            className="square"
            onClick={() => onButtonPress(value)}
        >
            {value}
        </button>
    );
}

function OpButtons({ value, onButtonPress }) {
    return (
        <button
            className="square"
            onClick={() => onButtonPress(value)}
        >
            {value}
        </button>
    );
}

function KeyPad({ handleOnClick, clearScreen, singleDelete }) {
    return (
        <div className="keypad">
            <div className="key-row">
                <button className="square double" value={"AC"}
                    onClick={clearScreen}>AC</button>
                <button className="square" value={"Del"}
                    onClick={singleDelete}>Del</button>
                <OpButtons value={"+"} onButtonPress={handleOnClick} />
            </div>
            <div className="key-row">
                <NumButtons value={7} onButtonPress={handleOnClick} />
                <NumButtons value={8} onButtonPress={handleOnClick} />
                <NumButtons value={9} onButtonPress={handleOnClick} />
                <OpButtons value={"*"} onButtonPress={handleOnClick} />
            </div>
            <div className="key-row">
                <NumButtons value={4} onButtonPress={handleOnClick} />
                <NumButtons value={5} onButtonPress={handleOnClick} />
                <NumButtons value={6} onButtonPress={handleOnClick} />
                <OpButtons value={"-"} onButtonPress={handleOnClick} />
            </div>
            <div className="key-row">
                <NumButtons value={1} onButtonPress={handleOnClick} />
                <NumButtons value={2} onButtonPress={handleOnClick} />
                <NumButtons value={3} onButtonPress={handleOnClick} />
                <OpButtons value={"/"} onButtonPress={handleOnClick} />
            </div>
            <div className="key-row">
                <NumButtons value={"."} onButtonPress={handleOnClick} />
                <NumButtons value={0} onButtonPress={handleOnClick} />
                <button className="square double" value={'='} onClick={() => handleOnClick('=')}> = </button>
            </div>
        </div>
    )
}

export { CalcApp, InputRow, KeyPad, DisplayScreen }