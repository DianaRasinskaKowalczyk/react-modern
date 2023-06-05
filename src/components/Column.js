import React, { useContext } from 'react';
import { BoardContext } from '../context';
import Task from './Task';

const Column = (props) => {
    const { column } = props;
    const { defaultTasks } = useContext(BoardContext);
    // eslint-disable-next-line no-console
    console.log(defaultTasks);

    // eslint-disable-next-line no-console
    const columnTasks = defaultTasks.filter((task) => column.id === task.idColumn);
    // eslint-disable-next-line no-console

    // eslint-disable-next-line no-console

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
