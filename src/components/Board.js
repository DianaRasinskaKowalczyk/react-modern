import React, { useContext } from 'react';
import Column from './Column';
import { BoardContext } from '../context';
import '../styles/board.css';

const Board = () => {
    const { data } = useContext(BoardContext);
    const { columns } = data;

    const columnsInBoard = columns.map((column) => <Column column={column} key={column.id} />);

    return (
        <section className="board">
            <h2 className="board__title">TASKS BOARD</h2>
            <ul className="board__columns">{columnsInBoard}</ul>
        </section>
    );
};

export default Board;
