import React from 'react';
import b from './button.module.css'
import {Button} from "@mui/material";


export type SuperButtonPropsType = {
    title: string
    clickHandler: () => void
    disabled?: boolean | undefined

}

export const SuperButton: React.FC<SuperButtonPropsType> = (props) => {
    const {title, clickHandler} = props

    const onclickHandler = () => {
        clickHandler()
    }

    const buttonStyle = `${b.button} ${props.disabled ? b.buttonDisabled : ''}`

    return (
        <div>
            <Button
                color={'primary'}
                onClick={onclickHandler}
                className={buttonStyle}
                disabled={props.disabled}
            >{title}
            </Button>
        </div>
    );
};

