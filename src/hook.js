import { useState, useEffect } from 'react';

const useStorage = (key, defaultValue) => {
    const [state, setState] = useState(defaultValue);

    const getItem = () => {
        // eslint-disable-next-line no-undef
        JSON.parse(localStorage.getItem(key));
    };

    useEffect(() => {
        const item = getItem();

        if (item) {
            setState(item);
        }
    }, []);

    const setItem = (obj) => {
        // eslint-disable-next-line no-undef
        localStorage.setItem(key, JSON.stringify(obj));
    };

    const savedData = (obj) => {
        setState(obj);
        setItem(obj);
    };

    return [state, savedData];
};

export default useStorage;
