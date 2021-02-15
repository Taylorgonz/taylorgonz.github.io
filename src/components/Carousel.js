import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from '../components/Card';

import DinnerDate from '../Images/project-pictures/dinner-date.png'
import WeatherApp from '../Images/project-pictures/weather-dashboard.png'
import QuizApp from '../Images/project-pictures/quiz-screen.png'


class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Dinner Date',
                    subTitle: 'Random dinner and movie app',
                    imgSrc: DinnerDate,
                    link: "https://thetiiiim.github.io/evening-planner/",
                    selected: false
                },
                {
                    id: 1,
                    title: 'Weather Dashboard',
                    subTitle: 'Clean and easy to use weather app',
                    imgSrc: WeatherApp,
                    link: "https://taylorgonz.github.io/Weather_Dashboard/",
                    selected: false
                },
                {
                    id: 2,
                    title: 'Coding Quiz',
                    subTitle: 'Quiz game to check your coding knowledge!',
                    imgSrc: QuizApp,
                    link: "https://taylorgonz.github.io/code-quiz/",
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        console.log(id)

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });

    }

    makeItems = (items) => {
        return items.map(item => <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />)
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Carousel;

