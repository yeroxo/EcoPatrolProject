import React from 'react'
import './style.css'

function StationLink(props){
    return (
        <div className = 'StationLink__block'>
            <a href={props.link}><img src={props.image}></img><p>{props.name}</p></a>
        </div>       
    )
}

export default StationLink