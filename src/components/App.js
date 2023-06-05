/* eslint-disable no-console */
import React from 'react';
import { defaultColumns, defaultTasks } from '../db/defaultData';
// import Column from './Column';
import { BoardContext } from '../context';
import Board from './Board';

const App = () => (
    // eslint-disable-next-line no-sequences, react/jsx-no-constructed-context-values
    <BoardContext.Provider value={{ defaultTasks, defaultColumns }}>
        <Board />
    </BoardContext.Provider>
);

export default App;
