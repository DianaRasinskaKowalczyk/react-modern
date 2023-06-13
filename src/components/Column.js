/* eslint-disable indent */
import React, { useContext } from 'react';
import { BoardContext } from '../context';
import Task from './Task';
import '../styles/column.css';

const Column = (props) => {
    const { column } = props;
    const { data } = useContext(BoardContext);
    const { tasks } = data;

    // eslint-disable-next-line no-console, no-unused-vars
    const columnTasks = tasks.filter((task) => column.id === task.idColumn);

    const renderedTasks = columnTasks.map((task) => <Task taskData={task} key={task.id} />);

    const addColumnClass = () => {
        switch (column.id) {
            case 1:
                return 'column--pending';
            case 2:
                return 'column--analysis';
            case 3:
                return 'column--development';
            case 4:
                return 'column--testing';
            case 5:
                return 'column--done';
            default:
                return null;
        }
    };

    return (
        <li className="column__item" key={column.id}>
            <h2 className={`column__item--title ${addColumnClass()}`}>{column.columnName}</h2>
            <p className={`column__item--limit ${addColumnClass()}`}>Tasks limit: {column.limit}</p>
            <ul className="column__tasks">{renderedTasks}</ul>
        </li>
    );
};

export default Column;
