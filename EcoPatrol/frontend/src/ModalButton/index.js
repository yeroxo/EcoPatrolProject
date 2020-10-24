import React from 'react'
import ModalInstruction from '../ModalInstruction'
import './style.css'

export default class ModalButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isModalOpen: false }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.openModal()}>{this.props.title}</button>
                <ModalInstruction isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <h3>Как пользоваться картой</h3>
                    <p>Здесь будет инструкция</p>
                </ModalInstruction>
            </div>
        )
    }

    openModal() {
        this.setState({ isModalOpen: true })
    }

    closeModal() {
        this.setState({ isModalOpen: false })
    }
}