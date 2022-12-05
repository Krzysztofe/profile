import React, {FC} from 'react';

interface Props{
    className: string
    text: string
    onClick?: () => void
}

const Button:FC<Props> = ({className, text, onClick}) => {
    return (
        <button className={className}
        onClick = {onClick}>
            {text}
        </button>
    );
};

export default Button;