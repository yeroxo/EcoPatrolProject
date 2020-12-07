import React from 'react'
import './style.css'
import ModalButton from '../ModalButton'

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <div className='header__content'>
                    <a href='/'> 
                        {/* <img className='logo-image'src='./images/big-logo.png'></img> */}
                        {/* <div className='logo-image'></div> */}
                    </a>
                    <a href='https://экологическийпатруль.рф/'>О проекте</a>
                    <ModalButton title='Как пользоваться картой' content = {
                        <div>
                            <h2>Как пользоваться картой</h2>
                            <div>Перед вами карта Челябинской области. Вы можете перемещаться по ней. На боковой панели будут отображаться экостанции, видимые на карте.</div>
                            <div>Нажмите на интересующую вас экостанцию, чтобы узнать о ней больше</div>
                        </div>
                        }/>
                    <ModalButton title='Контакты' content={
                        <div>
                         <h2>Контакты</h2>
                            <a href='http://ocdod74.ru/структурные-подразделения/региональный-центр-экостанция'>
                               <p>Сайт областного центра дополнительного образования детей Челябинской области</p>
                            </a>
                            <a href='https://vk.com/ecostation74'>
                                <p>Группа "Экостанции" в ВК</p>
                            </a>    
                    </div>
                    }/>
                </div>              
            </header>
        )
    }
}