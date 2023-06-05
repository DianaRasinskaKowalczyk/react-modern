import React from 'react';

const Task = (props) => {
    const { taskData } = props;

    return (
        <li key={taskData.id}>
            <h3>Task Title: {taskData.taskName}</h3>
            <p>Task Owner: {taskData.taskOwner}</p>
            <p>Task Description: {taskData.taskDescription}</p>
            <p>Task Deadline: {taskData.taskDeadline}</p>
            <p>Current Column: {taskData.idColumn}</p>
        </li>
    );
};

export default Task;
