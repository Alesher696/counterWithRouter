import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Setter} from "./CounterComponents/Setter";
import {Counter} from "./CounterComponents/Counter";


type SiteProps = {
    value: number
    click: () => void
    reset: () => void
    min: number
    max: number
    setMinMaxValue: (minValue: string, maxValue: string) => void
}

export const Site: React.FC<SiteProps> = ({value, click, reset, min, max, setMinMaxValue}) => {


    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/Counter'}/>}/>
                <Route path={'/Counter'} element={<Counter
                    value={value}
                    click={click}
                    reset={reset}
                    min={min}
                    max={max}/>}/>
                <Route path={'/Setter'} element={<Setter setMinMaxValue={setMinMaxValue}/>}/>
            </Routes>
        </div>
    );
};

