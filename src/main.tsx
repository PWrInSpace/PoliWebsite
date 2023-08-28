import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RotatingLines } from 'react-loader-spinner';

const App = React.lazy(() => import('./pages/app/App'));

const loader =  () => {
    return (
        <div style={{ background: 'black', height: '100vh', display: 'flex', justifyContent: 'center' }}>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="30px"
                visible={true}
            />
        </div>
    );
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Suspense fallback={loader()}>
            <App />
        </Suspense>
    </React.StrictMode>
);
