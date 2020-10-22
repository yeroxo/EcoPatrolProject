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
                    <Map defaultState={{ center: [55.4, 61.7], zoom: 8 }} height = "91vh" width='90vw'/>
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
            '<img class="map__img src="https://lh3.ggpht.com/KV-KPdiqPUxbHuNkba5T5XR9JfH673Hv9Gk6Lb42o8GQ4sPyneCszPl8Uw8rZUWrbl4"/>',
            ':3 1',
            '</div>'
        ]
    },
    ]
    
}