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

    return (
        <li className="column__item" key={column.id}>
            <h2 className={`column__item--title ${column.color}`}>{column.columnName}</h2>
            <p className={`column__item--limit ${column.color}`}>Tasks limit: {column.limit}</p>
            <ul className="column__tasks">{renderedTasks}</ul>
        </li>
    );
};

export default Column;
