import React from 'react'
import ModalInstruction from '../ModalInstruction'
import './style.css'

export default class ModalButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isModalOpen: false }
    }

    render(props) {
        return (
            <div>
                <button className='ModalButton' onClick={() => this.openModal()}>{this.props.title}</button>
                <ModalInstruction isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    {this.props.content}
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