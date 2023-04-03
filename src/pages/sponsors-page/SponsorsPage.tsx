import React from 'react';
import { DisplaySponsors } from '../../components/display-sponsors/DisplaySponsors';
import { SubpageWrapper } from '../../components/subpage-wrapper/SubpageWrapper';

export default function SponsorsPage() {
    return(
        <SubpageWrapper title={__('sponsorsPage.header')} bottomMargin={true}>
            <DisplaySponsors/>
        </SubpageWrapper>
    );
}