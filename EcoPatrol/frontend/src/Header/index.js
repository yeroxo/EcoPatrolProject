import React from 'react'
import './style.css'
import ModalButton from '../ModalButton'

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <div className='header__content'>
                    <a href='https://yandex.ru/'>Лого</a>
                    <a href='https://yandex.ru/'>О проекте</a>
                    <ModalButton title='Как пользоваться картой'></ModalButton>
                    <a href='https://yandex.ru/'>Контакты</a>
                </div>
                
            </header>
        )
    }
}