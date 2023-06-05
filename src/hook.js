import { useEffect, useState } from 'react';

const useStorage = (key, defaultValues) => {
    const setItem = () => {
        // eslint-disable-next-line no-undef
        localStorage.setItem(key, JSON.stringify(defaultValues));
    };

    const getItem = () => {
        // eslint-disable-next-line no-undef
        JSON.parse(localStorage.getItem(key));
    };

    const [state, setState] = useState(defaultValues);

    useEffect(() => {
        const item = getItem();
        if (item) {
            setState(item); // zapisuję dane do state z LS
        }
    }, []); // pobieran dane przy pierwszy mzaładowaniu

    const save = (obj) => {
        setState(obj); // zapisuje dane w state
        setItem(obj); // zapisuje w LS
    };

    return [state, save]; // przekazuje obecny stan oraz funkcję do jego zmieniania
};

export default useStorage;
