/* eslint-disable indent */
import React, { useContext } from 'react';
import { BoardContext } from '../context';
import '../styles/task.css';

const Task = (props) => {
    const { taskData } = props;

    const { id, taskName, taskOwner, idColumn, taskDescription, taskDeadline } = taskData;

    const { data, setData } = useContext(BoardContext);

    const { columns, tasks } = data;

    const getNextColumn = () => {
        const nextColumn = columns.find((column) => column.id === Number(idColumn) + 1);
        return nextColumn;
    };

    const canTaskMove = () => {
        const nextColumn = getNextColumn();

        if (nextColumn) {
            // eslint-disable-next-line arrow-body-style
            const tasksInNextColumn = tasks.filter((task) => {
                return task.idColumn === nextColumn.id;
            });

            if (tasksInNextColumn.length < nextColumn.limit) {
                return true;
            }
        }
        return false;
    };

    const moveTask = (taskId) => {
        if (canTaskMove()) {
            // eslint-disable-next-line array-callback-return
            const newTasks = tasks.map((task) => {
                if (task.id === taskId) {
                    const newIdColumn = getNextColumn();
                    return { ...task, idColumn: newIdColumn.id };
                }
                return task;
            });

            setData({ columns, tasks: newTasks });
        }
    };

    const removeTask = (taskId) => {
        // eslint-disable-next-line arrow-body-style
        const newTasks = tasks.filter((task) => {
            return task.id !== taskId;
        });

        setData({
            columns,
            tasks: newTasks,
        });
    };

    // eslint-disable-next-line consistent-return
    const addTaskClass = () => {
        switch (idColumn) {
            case 1:
                return 'task--pending';
            case 2:
                return 'task--analysis';
            case 3:
                return 'task--development';
            case 4:
                return 'task--testing';
            case 5:
                return 'task--done';
            default:
                return null;
        }
    };

    return (
        <li className={`task ${addTaskClass()}`} key={id}>
            <h3>Title: {taskName}</h3>
            <p>Owner: {taskOwner}</p>
            <p>Description: {taskDescription}</p>
            <p>Deadline: {taskDeadline}</p>
            <p>Current Column: {idColumn}</p>
            <button
                className="task__button"
                type="button"
                onClick={idColumn === 5 ? () => removeTask(id) : () => moveTask(id)}
            >
                {idColumn === 5 ? 'Task is done' : 'Move right'}
            </button>
        </li>
    );
};

export default Task;
