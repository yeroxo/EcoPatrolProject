import React, {Fragment} from 'react'
import SideBlock from '../components/SideBlock'
import Map from '../components/Map'

export const MapPage = () => {
    return (
        <Fragment>
            <div className="mapContent">
                <SideBlock />
                <Map />
            </div> 
        </Fragment>
        )
}