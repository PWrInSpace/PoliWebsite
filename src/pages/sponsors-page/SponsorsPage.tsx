import React from 'react';
import { DisplaySponsors } from '../../components/display-sponsors/DisplaySponsors';
import { SubpageWrapper } from '../../components/subpage-wrapper/SubpageWrapper';
import { Helmet } from 'react-helmet';

export default function SponsorsPage() {
    return(
        <>
            <Helmet>
                <title>{__('sponsorsPage.meta.title')}</title>
                <meta name="description" content={__('sponsorsPage.meta.description')}/>
                <meta property="og:title" content={__('sponsorsPage.meta.title')}/>
                <meta property="og:description" content={__('sponsorsPage.meta.description')}/>
                <meta property="og:image" content={String(require('../../assets/images/about-us-page/image2.png'))}/>
            </Helmet>
            <SubpageWrapper title={__('sponsorsPage.header')} bottomMargin={true}>
                <DisplaySponsors/>
            </SubpageWrapper>
        </>
    );
}