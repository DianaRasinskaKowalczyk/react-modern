import React, { useContext } from 'react';
import Column from './Column';
import { BoardContext } from '../context';

const Board = () => {
    const { columns } = useContext(BoardContext);

    // eslint-disable-next-line react/destructuring-assignment, no-unused-vars
    const columnsInBoard = columns.map((column) => <Column column={column} key={column.id} />);

    return (
        <section>
            <h2>Tasks Board</h2>
            <ul>{columnsInBoard}</ul>
        </section>
    );
};

export default Board;
