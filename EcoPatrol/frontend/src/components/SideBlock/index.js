import React from 'react'
import './style.css'
import StationLink from '../StationLink'

export default class SideBlock extends React.Component {

    render(){
        return (
            <div className='sideBlock'>
                <h1>Список экостанций</h1>
                <StationLink name = 'Название станции'
                    image={'https://f24-a.akamaihd.net/sites/default/files/f24/catalog/20181111/f709b20fd47940ecb7e89b2caac59c1f.jpg'} />
                <StationLink name='Название станции'
                    image={'https://f24-a.akamaihd.net/sites/default/files/f24/catalog/20181111/f709b20fd47940ecb7e89b2caac59c1f.jpg'} />
                <StationLink name='Название станции'
                    image={'https://f24-a.akamaihd.net/sites/default/files/f24/catalog/20181111/f709b20fd47940ecb7e89b2caac59c1f.jpg'} />    
                <div className='div__niceScroll'></div>    
            </div>
        )
    }
}