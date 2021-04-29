import React from 'react';
import Banner from '../../components/Banner/Banner';
import Info from '../../components/Info/Info';
import StartToday from '../../components/StartToday/StartToday';
import OurServices from '../../components/OurServices/OurServices';
import Call from '../../components/Call/Call';
import Documentation from '../../components/Documentation/Documentation';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <StartToday />
            <OurServices />
            <Call />
            <Documentation />
        </div>
    )
}

export default Home
