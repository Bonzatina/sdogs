
import React, {Component} from 'react';
import Slider from 'react-slick';


import './Carousel.css';

const carouselItems = [
    {id: 1, img: '', title: 'Product Title 1', prise: '14,95 $', description: 'Lorem ipsum sit dolor lorem amet ipsum sit dolor lorem'},
    {id: 2, img: '', title: 'Product Title 2', prise: '14,95 $', description: 'Lorem ipsum sit dolor lorem amet ipsum sit dolor lorem'},
    {id: 3, img: '', title: 'Product Title 3', prise: '14,95 $', description: 'Lorem ipsum sit dolor lorem amet ipsum sit dolor lorem'},
    {id: 4, img: '', title: 'Product Title 4', prise: '14,95 $', description: 'Lorem ipsum sit dolor lorem amet ipsum sit dolor lorem'},
    {id: 5, img: '', title: 'Product Title 5', prise: '14,95 $', description: 'Lorem ipsum sit dolor lorem amet ipsum sit dolor lorem'},
    {id: 6, img: '', title: 'Product Title 6', prise: '14,95 $', description: 'Lorem ipsum sit dolor lorem amet ipsum sit dolor lorem'},
];





export default class CarouselComponent extends Component {


    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <div className="main">
                <Slider {...settings}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>6</h3></div>
                </Slider>
            </div>
        );
    }
}


