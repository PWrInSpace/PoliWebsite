declare module '*.scss' {
    const styles: any;
    export default styles;
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpeg';

interface ApplicationContext {
    baseUrl: string;
}
interface Window {
    appContext: ApplicationContext;
    __: (str: string, ...args: any) => string;
    classes: (...args: string[]) => string;
}

declare const __: (str: string, ...args: any) => string;
declare const classes: (...args: string[]) => string;