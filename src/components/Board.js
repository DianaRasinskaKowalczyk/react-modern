import React, { useContext } from 'react';
import Column from './Column';
import { BoardContext } from '../context';

const Board = () => {
    const { defaultColumns } = useContext(BoardContext);

    // eslint-disable-next-line react/destructuring-assignment, no-unused-vars
    const columns = defaultColumns.map((column) => <Column column={column} key={column.id} />);

    return (
        <section>
            <h2>Tasks Board</h2>
            <ul>{columns}</ul>
        </section>
    );
};

export default Board;
