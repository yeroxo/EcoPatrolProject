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
                        <th><p>Описание</p></th>
                        {/* <th><p>Описание</p></th> */}
                        <th><p>Контакт</p></th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr>
                            <td data-label="Описание"><p>{contact.name}</p></td>
                            {/* <td data-label="Описание"><p>{contact.name}</p></td> */}
                            <td data-label="Контакт"><p>{contact.method}</p></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
 }
}