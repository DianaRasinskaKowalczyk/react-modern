const fields = [
    {
        name: 'taskName',
        label: 'Task name',
        required: true,
        pattern: false,
        type: 'text',
        placeholder: '',
    },
    {
        name: 'taskOwner',
        label: 'Task owner',
        required: true,
        pattern: false,
        type: 'text',
        placeholder: '',
    },
    {
        name: 'taskDescription',
        label: 'Task description',
        required: true,
        pattern: false,
        type: 'text',
        placeholder: '',
    },
    {
        name: 'taskDeadline',
        label: 'Task deadline',
        required: true,
        pattern: /[0-9]{4}-[0-9]{2}-[0-9]{2}/,
        type: 'text',
        placeholder: 'YYYY-MM-DD',
    },
];

export default fields;
