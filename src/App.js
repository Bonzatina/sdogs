import React, {Component} from 'react';

import CarouselComponent from './Carousel'

import lion from './lion.jpeg';
import top_img from './top_img.jpeg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App_top">

                    <div className="App_top_text">Lorem ipsum sit dolor lorem amet</div>
                </div>

                <div className="App_middle">
                    <CarouselComponent/>
                </div>

                <div className="App_bottom">

                </div>


            </div>
        );
    }
}

export default App;
