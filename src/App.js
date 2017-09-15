import React, {Component} from 'react';
import CarouselComponent from './Carousel'
import './App.css';

import lion from './lion.jpg';

class App extends Component {
    render() {
        return (
            <div className="App">

                <div className="App_top">
                    <div className="App_top_text">Lorem ipsum sit dolor lorem amet</div>
                </div>

                <div className="App_main">
                    <div className="App_main_products">
                        <CarouselComponent/>
                        <div className="shop_button_wrap">
                            <div className="shop_button">SHOP THE RANGE</div>
                        </div>
                    </div>

                    <div className="App_main_news">
                        <div className="block_title">NEWS AND RESOURCES</div>
                        <div className="news">
                            <div className="news_item">
                                <img src={lion} className="news_item_img" alt="img"/>
                                <div className="news_item_title">News title</div>
                                <div className="news_item_preview">Praesent pulvinar sapien fermentum, faucibus diam
                                    congue, ultricies tirpis
                                </div>
                                <div className="news_item_link">READ MORE</div>
                            </div>
                            <div className="news_item">
                                <img src={lion} className="news_item_img" alt="img"/>
                                <div className="news_item_title">News title</div>
                                <div className="news_item_preview">Praesent pulvinar sapien fermentum, faucibus diam
                                    congue, ultricies tirpis
                                </div>
                                <div className="news_item_link">READ MORE</div>
                            </div>
                            <div className="news_item">
                                <img src={lion} className="news_item_img" alt="img"/>
                                <div className="news_item_title">News title</div>
                                <div className="news_item_preview">Praesent pulvinar sapien fermentum, faucibus diam
                                    congue, ultricies tirpis
                                </div>
                                <div className="news_item_link">READ MORE</div>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        );
    }
}

export default App;
