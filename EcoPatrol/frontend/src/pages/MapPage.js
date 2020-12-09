import React, {Fragment} from 'react'
import SideBlock from '../components/SideBlock'
import Map from '../components/Map'

export default class MapPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stations: [],
            tlx: null,
            tly: null,
            brx: null,
            bry: null
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
    }
    render() {
        const {stations} = this.state;
    return (
        <Fragment>
            <div className="mapContent">
                <SideBlock stations={stations}/>
                <Map updateData={this.updateData} stations={
                        stations.map(station => 
                            // [station.location.x, station.location.y]
                            station
                            )
                }/>
            </div> 
        </Fragment>
        )
    }
    async componentDidMount() {
        const url = "http://127.0.0.1:8000/api/projects/";
        // const url = http://127.0.0.1:8000/api/projects/?TLX=54.5635&TLY=60.1334&BRX=55.6515&BRY=63.9891
        await fetch(url)
            .then(response => response.json())
            .then((myJson) => {
                this.setState({
                    stations: myJson,
                });
            })
            .catch(error => alert(error));
    }
}