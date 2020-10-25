import React from 'react'
import './style.css'

export default class ModalInstruction extends React.Component {
    render() {
        if (this.props.isOpen === false)
            return null

        return (
            <div>
                <div className="modal__div">
                    {this.props.children}
                </div>
                <div className="bg" onClick={e => this.close(e)} />
            </div>
        )
    }

    close(e) {
        e.preventDefault()

        if (this.props.onClose) {
            this.props.onClose()
        }
    }
}