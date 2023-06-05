const useStorage = (name) => {
    const setItem = (object) => {
        // eslint-disable-next-line no-undef
        localStorage.setItem(name, JSON.stringify(object));
    };

    const getItem = () => {
        // eslint-disable-next-line no-undef
        JSON.parse(localStorage.getItem(name));
    };

    return [getItem, setItem];
};

export default useStorage;
