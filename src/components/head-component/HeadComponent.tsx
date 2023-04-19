import React from 'react';
import { Helmet } from 'react-helmet';

interface IProps {
    children: JSX.Element;
    title: string;
    description: string;
    image: string;
}

export default function HeadComponent(props: IProps) {
    return(
        <>
            <Helmet>
                <title>{props.title}</title>
                <meta name="description" content={props.description}/>
                <meta property="og:title" content={props.title}/>
                <meta property="og:description" content={props.description}/>
                <meta property="og:image" content={props.image}/>
            </Helmet>
            {props.children}
        </>
    );
}