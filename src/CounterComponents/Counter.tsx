import React from 'react';
import {SuperButton} from "./SuperButton";
import b from './button.module.css'
import {NavLink} from "react-router-dom";


type CounterPropsType = {
    value: number
    click: () => void
    reset: () => void
    min: number
    max: number
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    const { value,  click,  reset } = props

     let title = {
        title1: 'inc',
        title2: 'reset',
        title3: 'SET'
    }

    const maxValueStyle = `${b.value} ${props.value === props.max ? b.valueRed : ''} `

    const DisablerInc = props.value === props.max
    const DisablerReset = props.value === props.min




    return (
        <div className={b.counter}>
            <ul className={`${maxValueStyle}`}>
                {value}
            </ul>

        <div className={b.buttons}>
            <div >
                <SuperButton
                    title={title.title1}
                    clickHandler={click}
                    disabled={DisablerInc}
                />
            </div>

            <div>
                <SuperButton
                    title={title.title2}
                    clickHandler={reset}
                    disabled={DisablerReset}
                />
            </div>

        </div>
            <div className={b.buttons}>
                <NavLink to={'/Setter'}><SuperButton
                    clickHandler={()=>{}}
                    title={title.title3}/></NavLink>
            </div>
        </div>
    );
};

