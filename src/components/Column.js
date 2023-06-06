import React, { useContext } from 'react';
import { BoardContext } from '../context';
import Task from './Task';

const Column = (props) => {
    const { column } = props;
    const { tasks } = useContext(BoardContext);

    // eslint-disable-next-line no-console, no-unused-vars
    const columnTasks = tasks.filter((task) => column.id === task.idColumn);

    const renderedTasks = columnTasks.map((task) => <Task taskData={task} key={task.id} />);

    return (
        <li key={column.id}>
            <h2>{column.columnName}</h2>
            <p>{column.limit}</p>
            <ul>{renderedTasks}</ul>
        </li>
    );
};

export default Column;
