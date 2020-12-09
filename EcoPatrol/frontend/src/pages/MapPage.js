import React, {Fragment} from 'react'
import SideBlock from '../components/SideBlock'
import Map from '../components/Map'

export default class MapPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stations: []
        }
    }
    render() {
        const {stations} = this.state;
    return (
        <Fragment>
            <div className="mapContent">
                <SideBlock stations={stations}/>
                <Map stations={
                        stations.map(station => [station.location.x, station.location.y])
                }/>
            </div> 
        </Fragment>
        )
    }
    async componentDidMount() {

        const url = "http://127.0.0.1:8000/api/projects/";
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