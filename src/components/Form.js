import React, { useReducer, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import fields from '../fields';
import validator from '../validator';
import { FormContext } from '../context';
import '../styles/form.css';

const Form = () => {
    const defaultFormData = {
        id: '',
        taskName: '',
        idColumn: 0,
        taskOwner: '',
        taskDescription: '',
        taskDeadline: '',
    };

    const { columns, tasks, addTask } = useContext(FormContext);
    const [errorsList, setErrorsList] = useState([]);
    const [info, setInfo] = useState('Add your task:');

    // eslint-disable-next-line arrow-body-style
    const reducer = (state, { name, value, type = '' }) => {
        if (type === 'reset') {
            return defaultFormData;
        }
        return {
            ...state,
            [name]: value,
        };
    };

    const [state, dispatch] = useReducer(reducer, defaultFormData);

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validator(state, fields);

        // eslint-disable-next-line no-unused-vars
        const getFirstColumn = () => {
            const firstColumn = columns.find((column) => Number(column.id) === 1);
            // eslint-disable-next-line no-console
            return firstColumn;
        };
        if (errors.length === 0) {
            const firstColumn = getFirstColumn();

            // eslint-disable-next-line arrow-body-style
            const tasksInFirstColumn = tasks.filter((task) => {
                return task.idColumn === 1;
            });

            if (tasksInFirstColumn.length < firstColumn.limit) {
                const task = {
                    id: state.id,
                    taskName: state.taskName,
                    idColumn: 1,
                    taskOwner: state.taskOwner,
                    taskDescription: state.taskDescription,
                    taskDeadline: state.taskDeadline,
                };
                addTask(task);
                setInfo('Congratulations! Your task is now ready to start.');
                dispatch({ type: 'reset' });
                setErrorsList([]);
            }
        } else {
            setInfo('Please fix the form');
            setErrorsList(errors);
        }
    };

    // eslint-disable-next-line arrow-body-style
    const formFields = fields.map((field) => {
        return (
            <label className="form__field" htmlFor={field.name} key={field.name}>
                {field.label}:
                <input
                    type={field.type}
                    name={field.name}
                    value={state[field.name]}
                    onChange={(e) => dispatch(e.target)}
                    placeholder={field.placeholder}
                />
            </label>
        );
    });

    return (
        <section className="form">
            <h2 className="form__title">{info}</h2>
            <form className="form__list" onSubmit={(e) => handleSubmit(e)}>
                {formFields}
                <input className="form__button" type="submit" value="Send" />
            </form>
            <ul className="form__mistakes--list">
                {errorsList.map((err) => (
                    <li key={uuid()}>{err}</li>
                ))}
            </ul>
        </section>
    );
};

export default Form;
