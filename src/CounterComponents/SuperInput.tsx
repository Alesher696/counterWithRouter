import React, {ChangeEvent} from 'react';
import {TextField} from "@mui/material";


type SuperInputPropsType={
    onChange: (e: ChangeEvent<HTMLInputElement>)=> void
    inputTitle: string
    value: string
}

export const SuperInput: React.FC<SuperInputPropsType> = (props) => {
    return (
        <div>
            <TextField
                id="standard-basic"
                label={props.inputTitle}
                variant="standard"
                onChange={props.onChange}
                value={props.value}/>
        </div>

    );
};

