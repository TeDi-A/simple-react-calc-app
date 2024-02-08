import { useState } from "react";

function CalcApp() {

    let [digits, setDigits] = useState([])
    const [result, setResult] = useState('');

    function handleButtonPress(value) {
        if (value === '=') {
            handleComputeCalc();
        } else {
            setDigits([...digits, value]);
        }
    }

    function handleClearScreen() {
        setDigits('');
        setResult('');
    }

    function handleSingleDelete() {
        setDigits([...digits.slice(0, -1)]);
        setResult('');
    }

    function handleComputeCalc() {
        let finalOutput = eval(digits.join(''));
        setResult(finalOutput.toString());
        setDigits('');
    }

    return (
        <>
            <DisplayScreen
                inputValue={digits}
                outputValue={result}
            />
            <KeyPad
                handleOnClick={handleButtonPress}
                clearScreen={handleClearScreen}
                singleDelete={handleSingleDelete}
                computeCalc={handleComputeCalc}
                input={digits}
            />
        </>
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


function KeyPad({ handleOnClick, clearScreen, singleDelete, computeCalc, input }) {
    return (
        <>
            <div className="key-row">
                <button className="square" value={"AC"}
                    onClick={clearScreen}>AC</button>
                <button className="square" value={"Del"}
                    onClick={singleDelete}>Del</button>

                <NumButtons />
                <OpButtons value={"+"} onButtonPress={handleOnClick} />
            </div>
            <div className="key-row">
                <NumButtons value={7} onButtonPress={handleOnClick} />
                <NumButtons value={8} onButtonPress={handleOnClick} />
                <NumButtons value={9} onButtonPress={handleOnClick} />
                <OpButtons value={"-"} onButtonPress={handleOnClick} />
            </div>
            <div className="key-row">
                <NumButtons value={4} onButtonPress={handleOnClick} />
                <NumButtons value={5} onButtonPress={handleOnClick} />
                <NumButtons value={6} onButtonPress={handleOnClick} />
                <OpButtons value={"*"} onButtonPress={handleOnClick} />
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
                <NumButtons />
                <button className="square"
                    onClick={() => computeCalc(input)}>=</button>
            </div>
        </>
    )
}

// 1. Set up structure
// 2. Number click function
// 3. Display screen
// 4. Number click display
// 5. Operations

export { CalcApp, InputRow, KeyPad, DisplayScreen }