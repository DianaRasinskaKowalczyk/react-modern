/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { initData } from '../db/defaultData';
import { BoardContext } from '../context';
import Board from './Board';
import useStorage from '../hook';

const App = () => {
    const [getStorage, setStorage] = useStorage('initData');

    useEffect(() => {
        const initialStorage = getStorage('initData');
        if (initialStorage === null) {
            setStorage(initData);
        }
        setStorage(initialStorage);
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <BoardContext.Provider value={initData}>
            <Board />
        </BoardContext.Provider>
    );
};

export default App;
