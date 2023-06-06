// eslint-disable-next-line import/prefer-default-export
export const initData = {
    columns: [
        { id: 1, columnName: 'Pending', limit: 5 },
        { id: 2, columnName: 'Analysis', limit: 3 },
        { id: 3, columnName: 'Development', limit: 3 },
        { id: 4, columnName: 'Test', limit: 4 },
        { id: 5, columnName: 'Done', limit: 5 },
    ],

    tasks: [
        {
            id: 1,
            taskName: 'Task1',
            idColumn: 2,
            taskOwner: 'Anna',
            taskDescription: 'task by Anna',
            taskDeadline: '2023-07-29',
        },
        {
            id: 2,
            taskName: 'Task2',
            idColumn: 3,
            taskOwner: 'John',
            taskDescription: 'task by John',
            taskDeadline: '2023-07-30',
        },
        {
            id: 3,
            taskName: 'Task3',
            idColumn: 1,
            taskOwner: 'Adam',
            taskDescription: 'task by Adam',
            taskDeadline: '2023-07-28',
        },
    ],
};
