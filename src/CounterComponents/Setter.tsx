import React, {ChangeEvent, useState} from 'react';
import {SuperButton,} from "./SuperButton";
import b from './button.module.css'
import {SuperInput} from "./SuperInput";
import {NavLink} from "react-router-dom";


type SetterPropsType = {
    setMinMaxValue: (minValue: string, maxValue: string) => void
}

export const Setter: React.FC<SetterPropsType> = (props) => {


    const title = ['MinValue:', ' MaxValue:']
    const [minVal, setMin] = useState('')
    const [maxVal, setMax] = useState('')


    const minChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMin(e.currentTarget.value)
    }

    const maxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(e.currentTarget.value)

    }
    const setValueHandler = () => {
        props.setMinMaxValue(minVal, maxVal)
        setMin('')
        setMax('')
    }

    const setDisabler = minVal >= maxVal

    return (
        <div className={b.counter}>
            <div className={b.inputArea}>
                <SuperInput
                    inputTitle={title[0]} value={minVal} onChange={minChangeHandler}/>
                <SuperInput
                    inputTitle={title[1]} value={maxVal} onChange={maxChangeHandler}/>
            </div>
            <div className={b.buttons}>
                <div className={b.buttonSet}>
                    <NavLink to={'/counterWithRouter'}>
                        <SuperButton title={"Set"} clickHandler={setValueHandler} disabled={setDisabler}/>
                    </NavLink>

                </div>
            </div>
        </div>
    );
};

