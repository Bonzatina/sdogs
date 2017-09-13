
import React, {Component} from 'react';
import Slider from 'react-slick';

import back from './back.svg';
import next from './next.svg';

import './Carousel.css';

const Products = [
    {id: 1, img: '', title: 'Product Title 1', prise: '14,95 $', description: 'Lorem ipsum sit dolor lorem amet ipsum sit dolor lorem'},
    {id: 2, img: '', title: 'Product Title 2', prise: '14,95 $', description: 'Lorem ipsum sit dolor lorem amet ipsum sit dolor lorem'},
    {id: 3, img: '', title: 'Product Title 3', prise: '14,95 $', description: 'Lorem ipsum sit dolor lorem amet ipsum sit dolor lorem'},
    {id: 4, img: '', title: 'Product Title 4', prise: '14,95 $', description: 'Lorem ipsum sit dolor lorem amet ipsum sit dolor lorem'},
    {id: 5, img: '', title: 'Product Title 5', prise: '14,95 $', description: 'Lorem ipsum sit dolor lorem amet ipsum sit dolor lorem'},
    {id: 6, img: '', title: 'Product Title 6', prise: '14,95 $', description: 'Lorem ipsum sit dolor lorem amet ipsum sit dolor lorem'},
];

function NextArrow(props) {
    const {className, style, onClick} = props
    return (
        <div
            className={className}
            style={{...style, display: 'block', top: '155px', backgroundImage: `url(${next})` }}
            onClick={onClick}>   </div>
    );
}

function PrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: 'block', top: '155px', backgroundImage: `url(${back})`}}
            onClick={onClick}
        >  </div>
    );
}


const carouselItems = Products.map(function (item, index) {
    return <div key={index} className="item">
        <div className="item_img"> </div>
        <div className="item_info">
            <div className="item_title">{item.title}</div>
            <div className="item_prise">{item.prise}</div>
            <div className="item_description">{item.description}</div>
        </div>


    </div>
});


export default class CarouselComponent extends Component {

    render() {

        console.log(window.innerWidth)
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }, { breakpoint: 1024, settings: { slidesToShow: 2 } }, { breakpoint: 1324, settings: { slidesToShow: 3 } }, ]
        };
        return (
            <div>
                <div className="block_title">FEATURE PRODUCTS</div>
                <Slider {...settings} className="carousel_items">
                    {carouselItems}
                </Slider>
            </div>

        );
    }
}


