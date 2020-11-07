import React from 'react'
import './style.css'

export default class StationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Название станции:
                     <input type="text" value={this.state.value} onChange={this.handleChange} />
                    Описание станции:
                     <input type="text" value={this.state.value} onChange={this.handleChange} />
                    Месторасположение станции:
                     <input type="text" value={this.state.value} onChange={this.handleChange} />
                    Изображение для карты:
                     <input type="file" />
                    Изображение для страницы станции:
                     <input type="file" />
                </label>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}