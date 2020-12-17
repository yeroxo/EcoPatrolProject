import React, {Fragment} from 'react'
import SideBlock from '../components/SideBlock'
import Map from '../components/Map'

export default class MapPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stations: [],
            tlx: 54.5635,
            tly: 60.1334,
            brx: 55.6515,
            bry: 63.9891
        }
        this.updateData = this.updateData.bind(this);
    }
    updateData = (valTLX, valTLY, valBRX, valBRY) => {
        this.setState({ 
            tlx: valTLX,
            tly: valTLY,
            brx: valBRX,
            bry: valBRY
        });
        this.componentDidMount();
    }
    render() {
        const {stations} = this.state;
        if (stations == null || stations.length == 0 || stations[0].name == null) {
            return (
                <Fragment>
                    <div className="mapContent">
                        <SideBlock stations={stations} />
                        <Map updateData={this.updateData} stations={stations}  />
                    </div>
                </Fragment>
            )
        }
    return (
        <Fragment>
            <div className="mapContent">
                <SideBlock stations={stations}/>
                <Map updateData={this.updateData} stations={
                        stations.map(station => station)
                }/>
            </div> 
        </Fragment>
        )
    }
    async componentDidMount() {
        const url = `http://127.0.0.1:8000/api/location/?x1=${this.state.tlx}&y1=${this.state.tly}&x2=${this.state.brx}&y2=${this.state.bry}`;
        await fetch(url)
            .then(response => response.json())
            .then((myJson) => {
                this.setState({
                    stations: myJson,
                });
            })
            .catch(error => 
                console.log(error),
                this.setState({
                    stations: null,
                })
                );
    }
}