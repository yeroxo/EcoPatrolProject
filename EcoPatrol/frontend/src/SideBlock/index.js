import React from 'react'
import './style.css'
import StationLink from '../StationLink'

export default class SideBlock extends React.Component {

    render(){
        return (
            <div className='sideBlock'>
                <h1>Список экостанций</h1>
                <StationLink name = 'Название станции' link= 'https://yandex.ru/' 
                image={'https://lh3.ggpht.com/KV-KPdiqPUxbHuNkba5T5XR9JfH673Hv9Gk6Lb42o8GQ4sPyneCszPl8Uw8rZUWrbl4'} />
                <StationLink name='Название станции' link='https://yandex.ru/'
                    image={'https://lh3.ggpht.com/KV-KPdiqPUxbHuNkba5T5XR9JfH673Hv9Gk6Lb42o8GQ4sPyneCszPl8Uw8rZUWrbl4'} />
                <StationLink name='Название станции' link='https://yandex.ru/'
                    image={'https://lh3.ggpht.com/KV-KPdiqPUxbHuNkba5T5XR9JfH673Hv9Gk6Lb42o8GQ4sPyneCszPl8Uw8rZUWrbl4'} />
                <StationLink name='Название станции' link='https://yandex.ru/'
                    image={'https://lh3.ggpht.com/KV-KPdiqPUxbHuNkba5T5XR9JfH673Hv9Gk6Lb42o8GQ4sPyneCszPl8Uw8rZUWrbl4'} />
                <StationLink name='Название станции' link='https://yandex.ru/'
                    image={'https://lh3.ggpht.com/KV-KPdiqPUxbHuNkba5T5XR9JfH673Hv9Gk6Lb42o8GQ4sPyneCszPl8Uw8rZUWrbl4'} />
                <StationLink name='Название станции' link='https://yandex.ru/'
                    image={'https://lh3.ggpht.com/KV-KPdiqPUxbHuNkba5T5XR9JfH673Hv9Gk6Lb42o8GQ4sPyneCszPl8Uw8rZUWrbl4'} />
                <StationLink name='Название станции' link='https://yandex.ru/'
                    image={'https://lh3.ggpht.com/KV-KPdiqPUxbHuNkba5T5XR9JfH673Hv9Gk6Lb42o8GQ4sPyneCszPl8Uw8rZUWrbl4'} />
                    
            </div>
        )
    }
}