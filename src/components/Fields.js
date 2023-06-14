import React from 'react';

// import fields from '../fields';

const Fields = (props) => {
    const { fields, currentState } = props;

    // const defaultFormData = useContext(InputContext);

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
                value={currentState[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
            />
        </label>
    ));

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{formFields}</>;
};

export default Fields;
