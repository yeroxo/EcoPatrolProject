import React from 'react'
import PropTypes from "prop-types";
import './style.css'
import StationContacts from '../StationContacts'


class Station extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            hidden: "hidden"
        }
    }

    getInitialState(){
        return ({ hidden: "hidden" });
    }

    componentWillMount(){
        var that = this;
        setTimeout(function () {
            that.show();
        }, that.props.wait);
    }

    show(){
        this.setState({ hidden: "" });
    }
    render(){
        const { name, description, picture, text_location, contacts } = this.props;
        return (
             <div className={this.state.hidden}>
            <div className='Station__block'>
                <img className='Station__img' src={picture} alt='Фото эко-станции'/>
                <h1 className='station__h1'>{name}</h1>
                <h2 className='station__h2'>О проекте</h2>
                <p>{description}</p>
                <h2 className='station__h2'>Где мы находимся</h2>
                <p>{text_location}</p>
                <h2 className='station__h2'>Как с нами связаться</h2>
                <StationContacts contacts={contacts}/>
                <a href='/'><button type='button' id='return__btn'><p id="return__btn__p">Вернуться на карту</p></button></a>
            </div>
            </div>
        )
    }
}

Station.propTypes = {
    name: PropTypes.string,
    contacts: PropTypes.array
};

export default Station;