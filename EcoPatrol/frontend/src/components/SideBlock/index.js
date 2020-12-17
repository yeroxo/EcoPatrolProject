import React from 'react'
import './style.css'
import StationLink from '../StationLink'

export default class SideBlock extends React.Component {
    render(){
        const {stations}=this.props;
        if (stations == null || stations.length==0 || stations[0].name==null){
            return (
                <div id='sideBlock'>
                    <ul className='sideBlock__ul'>
                        <h1 id='sideBlock__h1'>В данной области нет экостанций</h1>
                    </ul>
                </div>
            )
        }
        return (
            <div id='sideBlock'>
                <ul className='sideBlock__ul'>
                    {stations.map(item => (
                        <StationLink id={item.id} name = {item.name} picture = {item.picture}/>                 
                    ))}
                 </ul>
            </div>
        )
    }
}
