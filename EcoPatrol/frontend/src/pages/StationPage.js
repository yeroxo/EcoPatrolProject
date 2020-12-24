import React from 'react'
import Station from '../components/Station'

export default class StationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            description: null,
            picture: null,
            text_location: null,
            contacts: []
        };
    }
    render(){
        const { name, description, picture, text_location, contacts } = this.state;
    return (
        <Station name={name} description={description} picture={picture} text_location={text_location} contacts={contacts}/>
     )
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        await fetch(`http://80.87.194.239/api/projects/${id}/`)
            .then(response =>response.json())
            .then((myJson) => {
                this.setState({ name: myJson.name, 
                    description: myJson.description,
                    text_location: myJson.text_location,
                    contacts: myJson.contacts,
                    picture: myJson.picture
                });
            })
            .catch(error => alert(error)); 
    }
}
