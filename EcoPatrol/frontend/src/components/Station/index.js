import React from 'react'
import PropTypes from "prop-types";
import './style.css'
import StationContacts from '../StationContacts'


class Station extends React.Component{   
    render(){
        const { name, description, picture, text_location, contacts } = this.props;
        return (
            <div className='Station__block'>
                <img className='Station__img' src={picture} alt='Фото эко-станции'></img>
                <h1>{name}</h1>
                <h2>О проекте</h2>
                <p>{description}</p>
                <h2>Где мы находимся</h2>
                <p>{text_location}</p>
                <h2>Как с нами связаться</h2>
                <StationContacts contacts={contacts}/>
                <a href='/'><button type='button' id='return__btn'>Вернуться на карту</button></a>
            </div>
        )
    }
}

Station.propTypes = {
    name: PropTypes.string,
  //  description: PropTypes.string,
   // picture: PropTypes.object,
  //  text_location: PropTypes.string,
   contacts: PropTypes.array
};

export default Station;