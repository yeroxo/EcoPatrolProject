import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'

function StationLink(props){
    return (
        <div className = 'StationLink__block'>
            <NavLink className='nav-link' to='/station'>
                <img className='nav-link__image' src={props.image} alt='Фото эко-станции'></img>
                <p>{props.name}</p>
            </NavLink>
        </div>       
    )
}

export default StationLink