import { SetStateAction, useContext } from 'react';
import { positionValues } from 'react-custom-scrollbars-2';
import AppWindowScrollContext from '../context/AppWindowScrollContext';

export default function useWindowScroll() : positionValues {
    const context = useContext(AppWindowScrollContext);
    return context.getWindowScroll();
}
