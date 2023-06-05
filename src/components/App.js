/* eslint-disable no-console */
import React from 'react';
import { initData } from '../db/defaultData';
import { BoardContext } from '../context';
import Board from './Board';
import useStorage from '../hook';

const App = () => {
    const [state, save] = useStorage('my-app', initData);

    console.log(save);

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <BoardContext.Provider value={state}>
            <Board />
        </BoardContext.Provider>
    );
};

export default App;
