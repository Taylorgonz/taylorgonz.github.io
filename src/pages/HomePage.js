import React from 'react';

import HeroHome from '../components/HeroHome';

function HomePage(props) {
    return (
        <HeroHome title={props.title} subTitle={props.subTitle} text={props.text}/>

    );
}

export default HomePage;