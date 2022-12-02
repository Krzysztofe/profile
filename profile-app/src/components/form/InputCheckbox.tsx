import React, {ChangeEvent, FC} from 'react';

interface Props {
    value: boolean
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputCheckbox: FC<Props> = ({value, handleChange}) => {

    return (
            <label>
                <input type='checkbox'
                       name = 'checkbox'
                       checked={value}
                       onChange={handleChange}/>
                <div></div>
                <p>akceptuje regulamin</p>
            </label>
    );
};

export default InputCheckbox;