import React from 'react'
import './style.css'
import placemarks from '../placemarks.json'
import { YMaps, Map, ObjectManager} from 'react-yandex-maps';

export default class MyMap extends React.Component{
    objectManager = React.createRef();
    map = React.createRef();
    ymaps = React.createRef();

    getVisibleObjects = () => {
        let count = 0;
        if (this.objectManager.current) {
            this.objectManager.current.objects.each(obj => {
                const isShown = this.ymaps.current.util.bounds.containsPoint(
                    this.map.current.getBounds(),
                    obj.geometry.coordinates
                );
                if (isShown) {
                    count++;
                }
            });
        }
        console.log(count);
        alert(count);
    };
    render(){
        return (
            <div className='map'>
            <YMaps>
                <Map
                    instanceRef={this.map}
                    onBoundsChange={this.getVisibleObjects}
                    onLoad={ymapsInstance => {
                    this.ymaps.current = ymapsInstance;
                    }}
                    modules={["util.bounds"]}
                    defaultState={{
                        center: [55.4, 61.7],
                         zoom: 9 
                    }}
                    height="91vh"
                    width='90vw'
                >
                    <ObjectManager
                        instanceRef={this.objectManager}
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
            </div>
        )
    }
}