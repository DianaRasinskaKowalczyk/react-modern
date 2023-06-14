// eslint-disable-next-line import/prefer-default-export
export const initData = {
    columns: [
        { id: 1, columnName: 'Pending', limit: 5, color: 'column--pending' },
        { id: 2, columnName: 'Analysis', limit: 3, color: 'column--analysis' },
        { id: 3, columnName: 'Development', limit: 3, color: 'column--development' },
        { id: 4, columnName: 'Test', limit: 4, color: 'column--testing' },
        { id: 5, columnName: 'Done', limit: 5, color: 'column--done' },
    ],

    tasks: [
        {
            id: 1,
            taskName: 'Task 1',
            idColumn: 1,
            taskOwner: 'Anna',
            taskDescription: 'task by Anna',
            taskDeadline: '2023-07-29',
        },
        {
            id: 2,
            taskName: 'Task 2',
            idColumn: 1,
            taskOwner: 'John',
            taskDescription: 'task by John',
            taskDeadline: '2023-07-30',
        },
        {
            id: 3,
            taskName: 'Task 3',
            idColumn: 1,
            taskOwner: 'Adam',
            taskDescription: 'task by Adam',
            taskDeadline: '2023-07-28',
        },
        {
            id: 4,
            taskName: 'Task 4',
            idColumn: 1,
            taskOwner: 'Tom',
            taskDescription: 'task by Tom',
            taskDeadline: '2023-07-28',
        },
    ],
};
