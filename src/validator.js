function validator(inputData, fieldsArr) {
    // eslint-disable-next-line prefer-const
    let errors = [];

    // eslint-disable-next-line array-callback-return
    fieldsArr.map((field) => {
        const value = inputData[field.name];

        if (field.required && field.name !== 'taskDeadline') {
            if (value.length <= 2) {
                errors.push(`!!! ${field.label} is incorrect !!!`);
            }
        }

        if (field.pattern) {
            const reg = new RegExp(field.pattern);
            if (!reg.test(value)) {
                errors.push(`!!! ${field.label} is invalid !!!`);
            }
        }
    });
    return errors;
}

export default validator;
