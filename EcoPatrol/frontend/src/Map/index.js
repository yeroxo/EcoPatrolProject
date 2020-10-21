import React from 'react'
import './style.css'

import { YMaps, Map } from 'react-yandex-maps';

export default class MyMap extends React.Component{

    constructor(props) {
        super(props);
        // this.defaultState = { center: [55.4, 61.7], zoom: 8 };
    }

    render(){
        return (
            <YMaps>
                <div className='myMap'>
                    <Map defaultState={{ center: [55.4, 61.7], zoom: 8 }} height = "91vh" width='100%'/>
                </div>
            </YMaps>
        )
    }
    placemarks = [
    {
        latitude: 55.4,
        longitude: 61.7,
        hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
        balloonContent: [
            '<div class="map__balloon">',
            //    '<img class="map__burger-img" src="img/flower.png" alt="цветочек"/>',
            ':3 1',
            '</div>'
        ]
    },
    ]
    
}