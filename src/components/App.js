/* eslint-disable no-console */
import React from 'react';
import { initData } from '../db/defaultData';
import { BoardContext } from '../context';
import Board from './Board';
import useStorage from '../hook';

const App = () => {
    const [data, setData] = useStorage('my-app', initData);

    console.log(setData);

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <BoardContext.Provider value={data}>
            <Board />
        </BoardContext.Provider>
    );
};

export default App;
