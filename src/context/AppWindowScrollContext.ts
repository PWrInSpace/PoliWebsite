import { createContext } from 'react';
import { positionValues } from 'react-custom-scrollbars-2';

export interface IAppWindowScrollContext {
    setWindowScroll(value: positionValues);
    getWindowScroll(): positionValues;
}

const AppWindowScrollContext = createContext<IAppWindowScrollContext>(undefined);
export default AppWindowScrollContext;
