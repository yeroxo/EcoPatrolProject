import React from 'react'
import './style.css'
import ModalButton from '../ModalButton'

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <div className='header__content'>
                    <a href='/'> 
                        <img className='logo-image' src={require('../images/big-logo.png')}></img>
                    </a>
                    <a href='https://экологическийпатруль.рф/'>О проекте</a>
                    <ModalButton title='О карте' content = {
                        <div>
                            <div className='modal-name'><img className='modal-image' src={require('../images/logo.png')}></img>
                            <h2>О карте</h2>
                            </div>
                            <p>Перед вами карта Челябинской области. Вы можете перемещаться по ней, отслеживая местонахождение экостанций. На боковой панели будут отображаться экостанции, видимые на карте.</p>
                            <p>Нажмите на интересующую вас экостанцию, чтобы узнать о ней больше</p>
                        </div>
                        }/>
                    <ModalButton title='Контакты' content={
                        <div>
                            <div className='modal-name'><img className='modal-image' src={require('../images/logo.png')}></img>
                                <h2>Контакты</h2>
                            </div>
                            <ul>
                            <li><a className='modal__a' href='http://ocdod74.ru/структурные-подразделения/региональный-центр-экостанция'>
                               <p>Сайт областного центра дополнительного образования детей Челябинской области</p>
                            </a>
                                </li>
                                <li>
                            <a className='modal__a' href='https://vk.com/ecostation74'>
                                <p>Группа "Экостанции" в ВК</p>
                            </a>  
                            </li> 
                            </ul> 
                    </div>
                    }/>
                </div>              
            </header>
        )
    }
}