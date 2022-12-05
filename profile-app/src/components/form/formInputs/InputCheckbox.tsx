import React, {ChangeEvent, FC} from 'react';

interface Props {
    value: boolean
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputCheckbox: FC<Props> = ({value, handleChange}) => {

    return (
            <label className='inputCheckbox__label'>
                <input type='checkbox'
                       name = 'checkbox'
                       checked={value}
                       onChange={handleChange}
                className='inputCheckbox'/>
                <div className='inputCheckbox__style'></div>
                <p  className='inputCheckbox__text'>akceptuje regulamin</p>
            </label>
    );
};

export default InputCheckbox;