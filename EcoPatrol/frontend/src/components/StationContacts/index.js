import React from 'react'
import './style.css'

export default class StationContacts extends React.Component{

    SetContactName(props) {
        const name=props.name;
        if (name=='N') {
            return <p>ФИО</p>;
        }
        if (name == 'ON'){
            return <p>Название организации</p>;
        }
        if (name == 'P') {
            return <p>Телефон</p>;
        }
        if (name == 'E') {
            return <p>Электронная почта</p>;
        }
        return <p>Соцсети и мессенджеры</p>;
    }
 
    render(){
        const {contacts} = this.props;
    return (
        <div className="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th><p>Описание</p></th>
                        <th><p>Контакт</p></th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr>
                            <td data-label="Описание">
                                <this.SetContactName name={contact.name}/>
                            </td>
                            <td data-label="Контакт"><p>{contact.method}</p></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
 }
}