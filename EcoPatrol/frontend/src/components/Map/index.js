import React from 'react'
import './style.css'
import MyPlacemark from '../Placemark'

import { YMaps, Map, Placemark } from 'react-yandex-maps';

export default class MyMap extends React.Component{
    render(){
        return (
            // <YMaps>
            //     <div className='myMap'>
            //         <Map defaultState={{ center: [55.4, 61.7], zoom: 8 }} height = "91vh" width='90vw'>
            //             <Placemark geometry={[55.684758, 37.738521]} />
            //         <Map/>
            //     </div>
            // </YMaps>
            <YMaps>
                <Map
                    defaultState={{
                        center: [55.4, 61.7],
                         zoom: 8 
                    }}
                    height="91vh"
                    width='90vw'
                >
                    {/* <Placemark geometry={[55.4, 61.7]} /> */}
                    <MyPlacemark/>
                </Map>
            </YMaps>
        )
    }
}