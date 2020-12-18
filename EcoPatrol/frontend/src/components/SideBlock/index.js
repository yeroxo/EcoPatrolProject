import React from 'react'
import './style.css'
import StationLink from '../StationLink'

export default class SideBlock extends React.Component {
    SetStations(props) {
        const stations = props.stations;
        if (stations == null) {
            return (<ul className='sideBlock__ul'></ul>)
        }
        if (stations.length == 0 || stations[0].name == null) {
            return (
                    <ul className='sideBlock__ul'>
                        <h1 id='sideBlock__h1'>В данной области нет экостанций</h1>
                    </ul>
            )
        }
        return (
                <ul className='sideBlock__ul'>
                    {stations.map(item => (
                        <StationLink id={item.id} name={item.name} picture={item.picture} />
                    ))}
                </ul>
        )
    }
    render(){
        const {stations}=this.props;
        return (
            <div id='sideBlock'>
                <this.SetStations stations={stations}></this.SetStations>
            </div>
        )
    }
}
