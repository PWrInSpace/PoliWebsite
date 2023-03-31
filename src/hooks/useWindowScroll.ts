import { useContext } from 'react';
import Scrollbars, { positionValues } from 'react-custom-scrollbars-2';
import { AppWindowScrollContext } from '../context/AppWindowScrollContext';

export default function useWindowScroll() : [positionValues,Scrollbars] {
    const context = useContext(AppWindowScrollContext);
    return [context.getWindowScroll(), context.getWindowScrollAPI()];
}
