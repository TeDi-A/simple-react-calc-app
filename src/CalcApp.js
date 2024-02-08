import { useState } from "react";

function CalcApp() {
    function handleButtonPress(value) {
        console.log(value)
    }

    return (
        <>
            <DisplayScreen />
            <OpButtons
                handleOnClick={handleButtonPress}
            />
        </>
    )
}


function DisplayScreen() {
    return (
        <>
            <div className="calc-display">
                <DisplayRow />
                <DisplayRow />
            </div>
        </>
    )
}

function DisplayRow() {

    // const [digits, setDigits] = useState([])

}

function Square({ value, onButtonPress }) {
    return (
        <button
            className="square"
            onClick={()=>onButtonPress(value)}
        >
            {value}
        </button>
    );
}

function OpButtons({ handleOnClick }) {
    return (
        <>
            <div className="key-row">
                <Square value={"AC"} onButtonPress={handleOnClick} />
                <Square value={"Del"} onButtonPress={handleOnClick} />
                <Square />
                <Square value={"+"} onButtonPress={handleOnClick} />
            </div>
            <div className="key-row">
                <Square value={7} onButtonPress={handleOnClick} />
                <Square value={8} onButtonPress={handleOnClick} />
                <Square value={9} onButtonPress={handleOnClick} />
                <Square value={"-"} onButtonPress={handleOnClick} />
            </div>
            <div className="key-row">
                <Square value={4} onButtonPress={handleOnClick} />
                <Square value={5} onButtonPress={handleOnClick} />
                <Square value={6} onButtonPress={handleOnClick} />
                <Square value={"*"} onButtonPress={handleOnClick} />
            </div>
            <div className="key-row">
                <Square value={1} onButtonPress={handleOnClick} />
                <Square value={2} onButtonPress={handleOnClick} />
                <Square value={3} onButtonPress={handleOnClick} />
                <Square value={"/"} onButtonPress={handleOnClick} />
            </div>
            <div className="key-row">
                <Square value={"."} onButtonPress={handleOnClick} />
                <Square value={0} onButtonPress={handleOnClick} />
                <Square />
                <Square value={"="} onButtonPress={handleOnClick} />

            </div>
        </>
    )
}

// 1. Set up structure
// 2. Number click function
// 3. Display screen
// 4. Number click display
// 5. Operations

export { CalcApp, DisplayScreen, OpButtons, DisplayRow }