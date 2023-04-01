import dynamic from 'next/dynamic';
import React from 'react';
const Landingpages = dynamic(() => import("@/shared/data/LandingPageData/landingpages"), {ssr: false,});

const LandingPage = () => {

    

    return (
        <div >
            <Landingpages/>
        </div >
    )
};
LandingPage.layout = "Landingpagelayout"
export default LandingPage;