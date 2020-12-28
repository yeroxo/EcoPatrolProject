import React from 'react';
import './style.css';
import { YMaps, Map, Placemark, Clusterer, Button} from 'react-yandex-maps';

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

    moveToStartPosition = () =>{
        if (this.map.current) {
            this.map.current.setCenter([55.4, 61.7], 7, {
                checkZoomRange: true
            })
        }
    }

    SetStations(props) {
        const stations = props.stations;
        if (stations == null || stations.length == 0 || stations[0].name == null) {
            return(
                <Clusterer options={{
                    preset: 'islands#invertedVioletClusterIcons',
                    groupByCoordinates: false,
                }}/>
            )
        }
        return(
            <Clusterer options={{
                preset: 'islands#invertedVioletClusterIcons',
                groupByCoordinates: false,
            }}>
                {stations.map(station =>
                    <Placemark geometry={[station.longitude, station.latitude]}
                        properties={{
                            hintContent: station.name,
                            balloonContentHeader: station.name
                        }}
                        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                        options={{ preset: 'islands#violetStretchyIcon' }}
                    />)}
            </Clusterer>
        )
    }

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
                        modules={["util.bounds", "templateLayoutFactory", "layout.Image"]}
                        defaultState={{
                            center: [55.4, 61.7],
                            zoom: 7,
                            controls: []
                        }}
                        options={{
                            maxZoom: 14,
                            minZoom: 6,
//                             restrictMapArea: [[62, 50], [46, 72]]
                        }}
                        height="93vh"
                        width='80vw'
                    >
                        <Button
                            options={{ maxWidth: 128 }}
                            data={{ content: 'К Челябинску' }}
//                            defaultState={{
//                                selectOnClick: false,
//                            }}
                            onClick={this.moveToStartPosition}
                        />
                        <this.SetStations stations={stations}></this.SetStations>
                    </Map>
                </YMaps>
            </div>
        )
    }
}