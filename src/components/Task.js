import React, { useContext } from 'react';
import { BoardContext } from '../context';

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
            return taskId !== task.id;
        });

        setData({
            columns,
            tasks: newTasks,
        });
    };

    return (
        <li key={id}>
            <h3>Task Title: {taskName}</h3>
            <p>Task Owner: {taskOwner}</p>
            <p>Task Description: {taskDescription}</p>
            <p>Task Deadline: {taskDeadline}</p>
            <p>Current Column: {idColumn}</p>
            <button type="button" onClick={idColumn === 5 ? () => removeTask(id) : () => moveTask(id)}>
                {idColumn === 5 ? 'Task is done' : 'Move task to the right'}
            </button>
        </li>
    );
};

export default Task;
