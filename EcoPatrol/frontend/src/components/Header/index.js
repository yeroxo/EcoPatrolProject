import React from 'react'
import './style.css'
import ModalButton from '../ModalButton'

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <div className='header__content'>
                    <a href='/'> 
                        {/* <img className='logo-image'src='./images/logo.png'></img> */}
                    </a>
                    <a href='https://yandex.ru/'>О проекте</a>
                    <ModalButton title='Как пользоваться картой' content = {<h2>Как пользоваться картой</h2>}/>
                    <ModalButton title='Контакты' content={<h2>Контакты</h2>}/>
                </div>              
            </header>
        )
    }
}