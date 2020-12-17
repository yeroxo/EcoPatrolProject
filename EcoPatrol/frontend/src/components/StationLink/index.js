import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'

export default class StationLink extends React.Component{
    render(){
    const {id,name, picture} = this.props;
    return (
        <div className = 'StationLink__block'>
            <NavLink className='nav-link' to={'/station/'+ id}>
                <img className='nav-link__image' src={picture} alt='Фото эко-станции'></img>
                <p id='StationLink__p'>{name}</p>
            </NavLink>
        </div>       
    )
}
}
