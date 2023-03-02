import React,{ ReactNode, createContext, createRef } from 'react';
import Scrollbars, { positionValues } from 'react-custom-scrollbars-2';

export interface IAppWindowScrollContext {
    getWindowScrollAPI(): Scrollbars;
    getWindowScroll(): positionValues;
    scrollRef: React.RefObject<Scrollbars>;
}
export const AppWindowScrollContext = createContext<IAppWindowScrollContext>(undefined);
const scrollbarRef = createRef<Scrollbars>();

interface AppWindowScrollContextProviderProps {
  children: ReactNode;
  getWindowScroll: () => positionValues;
}

export const AppWindowScrollContextProvider = (props: AppWindowScrollContextProviderProps) => {
    return (
        <AppWindowScrollContext.Provider
            value={{
                getWindowScrollAPI: () => scrollbarRef.current,
                getWindowScroll: () => props.getWindowScroll(),
                scrollRef: scrollbarRef
            }}>
            {props.children}
        </AppWindowScrollContext.Provider>
    );
};
  
export default AppWindowScrollContextProvider;
