import React from 'react';
import Form from "./Form";
import FormHeader from "./FormHeader";

const FormMainComponent = () => {
    return (
        <div style={{minHeight: '120rem'}}>
            <FormHeader/>
            <Form/>
        </div>
    );
};

export default FormMainComponent;