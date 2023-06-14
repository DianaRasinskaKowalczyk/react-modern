import React, { useContext } from 'react';
import { InputContext } from '../context';
// import fields from '../fields';

const Fields = (props) => {
    const { fields } = props;

    const { defaultFormData } = useContext(InputContext);

    const handleChange = (e) => {
        const { handleInput } = props;
        handleInput(e);
    };

    const formFields = fields.map((field) => (
        <label className="form__field" htmlFor={field.name} key={field.name}>
            {field.label}:
            <input
                type={field.type}
                name={field.name}
                value={defaultFormData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
            />
        </label>
    ));

    return { formFields };
};

export default Fields;
