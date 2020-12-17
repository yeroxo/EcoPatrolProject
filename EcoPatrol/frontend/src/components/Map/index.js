import React from 'react'
import './style.css'
import { YMaps, Map, Placemark, Clusterer} from 'react-yandex-maps';

export default class MyMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tlx: null,
            tly: null,
            brx: null,
            bry: null,
        }
    }

    map = React.createRef();
    ymaps = React.createRef();

    getVisibleObjects = () => {
        if (this.ymaps.current) {
            this.setState={
                tlx: this.map.current.getBounds()[0][0],
                tly: this.map.current.getBounds()[0][1],
                brx: this.map.current.getBounds()[1][0],
                bry: this.map.current.getBounds()[1][1]
            }
            this.props.updateData(this.map.current.getBounds()[0][0], 
            this.map.current.getBounds()[0][1], 
                this.map.current.getBounds()[1][0], 
                this.map.current.getBounds()[1][1]);      
        }
    };

    render() {
        const { stations } = this.props;
        if (stations == null || stations.length == 0 || stations[0].name == null) {
            return (
                <div id='map'>
                    <YMaps>
                        <Map
                            instanceRef={this.map}
                            onBoundsChange={this.getVisibleObjects}
                            onLoad={ymapsInstance => {
                                this.ymaps.current = ymapsInstance;
                            }}
                            modules={["util.bounds", "templateLayoutFactory", "layout.Image"]}
                            defaultState={{
                                center: [55.4, 61.7],
                                zoom: 9
                            }}
                            height="93vh"
                            width='80vw'
                        >
                        </Map>
                    </YMaps>
                </div>
            )
        }
        return (
            <div id='map'>
                <YMaps>               
                    <Map 
                        instanceRef={this.map}
                        onBoundsChange={this.getVisibleObjects}
                        onLoad={ymapsInstance => {
                            this.ymaps.current = ymapsInstance;
                        }}
                        modules={["util.bounds", "templateLayoutFactory", "layout.Image"]}
                        defaultState={{
                            center: [55.4, 61.7],
                            zoom: 9
                        }}
                        height="93vh"
                        width='80vw'
                    >
                        <Clusterer options={{
                            preset: 'islands#invertedVioletClusterIcons',
                            groupByCoordinates: false,
                        }}>
                        {stations.map(station => 
                        <Placemark geometry={[station.longitude, station.latitude]} 
                                properties= {{
                                                hintContent: station.name,
                                                balloonContent: station.name                                               
                                              }}
                                modules= {['geoObject.addon.balloon', 'geoObject.addon.hint']}
                                options={{preset: 'islands#violetStretchyIcon'}}
                                />)}
                        </Clusterer>
                    </Map>
                </YMaps>
            </div>
        )
    }
}