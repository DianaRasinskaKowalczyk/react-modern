import { useState } from 'react';

const useStorage = (defaultValue) => {
    const [state, setState] = useState(defaultValue);

    return [state, setState];
};

export default useStorage;
