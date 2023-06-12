import { useState, useEffect } from 'react';

const useStorage = (key, defaultValue) => {
    const [state, setState] = useState(defaultValue);

    // eslint-disable-next-line arrow-body-style
    const getDataFromStorage = () => {
        // eslint-disable-next-line no-undef
        return JSON.parse(localStorage.getItem(key));
    };

    useEffect(() => {
        const dataFromStorage = getDataFromStorage();
        if (dataFromStorage) {
            setState(dataFromStorage);
        }
    }, []);

    const setDataInStorage = (object) => {
        // eslint-disable-next-line no-undef
        localStorage.setItem(key, JSON.stringify(object));
    };

    const saveData = (object) => {
        setState(object);
        setDataInStorage(object);
    };

    return [state, saveData];
};

export default useStorage;
