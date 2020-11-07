import React from 'react'
import './style.css'
import placemarks from '../placemarks.json'
import { YMaps, Map, Placemark, ObjectManager} from 'react-yandex-maps';

export default class MyMap extends React.Component{
    render(){
        return (
            <YMaps>
                <Map
                    defaultState={{
                        center: [55.4, 61.7],
                         zoom: 8 
                    }}
                    height="91vh"
                    width='90vw'
                >
                    <ObjectManager
                        options={{
                            clusterize: true,
                            gridSize: 32,
                        }}
                        objects={{
                            openBalloonOnClick: true,
                            preset: 'islands#greenDotIcon',
                        }}
                        clusters={{
                            preset: 'islands#redClusterIcons',
                        }}
                        features={placemarks}
                        modules={[
                            'objectManager.addon.objectsBalloon',
                            'objectManager.addon.objectsHint',
                        ]}
                    />
                </Map>
            </YMaps>
        )
    }
}