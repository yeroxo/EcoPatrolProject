import React from 'react'
import './style.css'
import StationLink from '../StationLink'

export default class SideBlock extends React.Component {

    add_stations(stations){
        if(stations.length===0){
            alert("zero")
            stations.map(item=>(<h3>В данной области нет экостанций</h3>))
        }
        else{
            alert("ok")
            stations.map(item => (
                    <StationLink id={item.id} name={item.name} picture={item.picture} />
                ))
        }
    }

    render(){
        const {stations}=this.props;
        if(stations.length===0 || stations[0].name==null){
            return (
                <div id='sideBlock'>
                    <ul className='sideBlock__ul'>
                        <h1 id='sideBlock__h1'>В данной области нет экостанций</h1>
                       {/* <h3>В данной области нет экостанций</h3> */}
                    </ul>
                </div>
            )
        }
        return (
            <div id='sideBlock'>
                <ul className='sideBlock__ul'>
                    {/* <h1 id='sideBlock__h1'>Список экостанций</h1> */}
                    {stations.map(item => (
                        <StationLink id={item.id} name = {item.name} picture = {item.picture}/>                 
                    ))}
                 </ul>
            </div>
        )
    }
    }
