import React from 'react';

import HeroHome from '../components/HeroHome';
import Carousel from '../components/Carousel';
import DinnerDate from '../Images/project-pictures/dinner-date.png'
import WeatherApp from '../Images/project-pictures/weather-dashboard.png'
import QuizApp from '../Images/project-pictures/quiz-screen.png'

function HomePage(props) {
    return (
        <div className='homePage'>
            <HeroHome title={props.title} subTitle={props.subTitle} text={props.text} />
            <h1 className="heroTitle text-center display-3 mb-5">Web Projects</h1>
            <Carousel/>       
        </div>
    );
}

export default HomePage;