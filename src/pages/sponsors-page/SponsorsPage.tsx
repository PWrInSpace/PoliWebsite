import React, { useEffect } from 'react';
import { DisplaySponsors } from '../../components/display-sponsors/DisplaySponsors';
import { SubpageWrapper } from '../../components/subpage-wrapper/SubpageWrapper';
import HeadComponent from '../../components/head-component/HeadComponent';

export default function SponsorsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <HeadComponent
            title={__('sponsorsPage.meta.title')}
            description={__('sponsorsPage.meta.description')}
            image={'../../assets/images/about-us-page/image2.png'}
        >
            <SubpageWrapper title={__('sponsorsPage.header')} bottomMargin={true}>
                <DisplaySponsors/>
            </SubpageWrapper>
        </HeadComponent>
    );
}