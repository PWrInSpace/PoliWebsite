import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface IProps {
    children: React.ReactElement;
    title: string;
    description: string;
    image: string;
}

export const HeadComponent = (props: IProps) => {
    return(
        <>
            <HelmetProvider>
                <Helmet>
                    <title>{props.title}</title>
                    <meta name="description" content={props.description}/>
                    <meta property="og:title" content={props.title}/>
                    <meta property="og:description" content={props.description}/>
                    <meta property="og:image" content={props.image}/>
                </Helmet>
                {props.children}
            </HelmetProvider>
        </>
    );
};