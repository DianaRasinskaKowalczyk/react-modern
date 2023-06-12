/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-console */
import React from 'react';
import { initData } from '../db/defaultData';
import { BoardContext, FormContext } from '../context';
import Board from './Board';
import useStorage from '../hook';
import Form from './Form';

const App = () => {
    const [data, setData] = useStorage('my-app', initData);

    const { tasks, columns } = data;


    const addTask = (task) => {
        const updatedData = {
            columns,
            tasks: [...tasks, task],
        };
        setData(updatedData);
    };

    return (
        <section>
            <BoardContext.Provider value={{ data, setData }}>
                <Board />
            </BoardContext.Provider>
            <FormContext.Provider value={{ setData, tasks, columns, addTask }}>
                <Form />
            </FormContext.Provider>
        </section>
    );
};

export default App;
