import React, {FC, ChangeEvent} from 'react';

interface Props {
    label: string
    type: string
    name: string
    value: string
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputText: FC<Props> = ({
                                  label,
                                  type,
                                  name,
                                  value,
                                  handleChange
                              }) => {
    return (
        <div>
            <label className='inputText__label'>
                {label}:</label>
            <input type={type}
                   value={value}
                   name={name}
                   onChange={handleChange}
                   className='inputText'/>
        </div>
    );
};

export default InputText;