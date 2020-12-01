import React from 'react'
import './style.css'

export default class StationContacts extends React.Component{

    
    render(){
        const {contacts} = this.props;
    return (
        <div className="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>Описание</th>
                        <th>Контакт</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr>
                            <td data-label="Описание">{contact.name}</td>
                            <td data-label="Контакт">{contact.method}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
                    }
}