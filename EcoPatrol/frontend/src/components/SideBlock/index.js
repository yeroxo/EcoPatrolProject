import React from 'react'
import './style.css'
import StationLink from '../StationLink'

export default class SideBlock extends React.Component {
    render(){
        const {stations}=this.props;
        return (
            <div id='sideBlock'>
                <h1>Список экостанций</h1>
                <ul className='sideBlock__ul'>
                    {stations.map(item => (
                        <StationLink id={item.id} name = {item.name} picture = {item.picture}/>                 
                    ))}
                 </ul>
            </div>
        )
    }
    }
