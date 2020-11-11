import React from 'react'
import './style.css'
import StationContacts from '../StationContacts'

function Station(props) {
    return (
        <div className='Station__block'>
            <img className='Station__img' src={props.image} alt='Фото эко-станции'></img>
            <h1>{props.name}</h1>
            <h2>О проекте</h2>
            <p>{props.about}</p>
            <h2>Где мы находимся</h2>
            <p>{props.location}</p>
            <h2>Как с нами связаться</h2>
            <StationContacts/>
        </div>
    )
}

export default Station