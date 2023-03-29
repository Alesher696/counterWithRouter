import React, {useEffect, useState} from 'react';
import {Site} from "./Site";


const App = () => {

    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [value, setValue] = useState<number>(minValue)


    useEffect(() => {
        let valueAsStringMin = localStorage.getItem('counterMinValue')
        let valueAsStringMax = localStorage.getItem('counterMaxValue')
        if (valueAsStringMin && valueAsStringMax) {
            let newValueMin = JSON.parse(valueAsStringMin)
            let newValueMax = JSON.parse(valueAsStringMax)
            setValue(newValueMin)
            setMaxValue(newValueMax)
            setMinValue(newValueMin)
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('counterMinValue', JSON.stringify(minValue))
        localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
    }, [minValue, maxValue])


    const incCount = () => {
        if (value < maxValue) {
            setValue(value + 1)
        }
    }

    const resetCounter = () => {
        setValue(minValue)
    }

    const setMinMaxValue = (minValue: string, maxValue: string) => {
        setMaxValue(Number(maxValue))
        setMinValue(Number(minValue))
        setValue(Number(minValue))
    }

    return (
        <div>
            <Site
                value={value}
                click={incCount}
                reset={resetCounter}
                min={minValue}
                max={maxValue}
                setMinMaxValue={setMinMaxValue}
            />
        </div>
    );
};

export default App