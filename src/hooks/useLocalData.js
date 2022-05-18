import { useContext } from 'react';

import { LocalDataContext } from '../core/context';

const useLocalData = () => useContext(LocalDataContext);

export default useLocalData;