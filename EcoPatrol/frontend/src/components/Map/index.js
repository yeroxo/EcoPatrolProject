import React from 'react'
import './style.css'
import { YMaps, Map, ObjectManager, Placemark} from 'react-yandex-maps';

export default class MyMap extends React.Component {
    objectManager = React.createRef();
    map = React.createRef();
    ymaps = React.createRef();


    render() {
        const { stations } = this.props;
        return (
            <div id='map'>
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
                        {stations.map(coordinate => <Placemark geometry={coordinate} />)}

                        {/* <ObjectManager
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
                            features= {stations}
                            modules={[
                                'objectManager.addon.objectsBalloon',
                                'objectManager.addon.objectsHint',
                            ]}
                        /> */}
                    </Map>
                </YMaps>
            </div>
        )
    }
}