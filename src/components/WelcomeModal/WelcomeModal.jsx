import './WelcomeModal.scss';
import React, { Component } from 'react';

export class WelcomeModal extends Component {
    render() {
        if (this.props.visibility === false) {
            return null
        } else {
            return (
                <div className="modal">
                    <div className="modal__overlay"></div>
                    <article className="modal__container">
                        <p className="modal__container-message">Hi there! My name is David Nugent. You're here because you've shown an interest in my work - as such, I would like to start by thanking you. Take your time exploring and feel free to contact me if you have any questions. Happy browsing!</p>
                        <button className="modal__container-button" onClick={()=> {
                            this.props.updateModalVisibility()
                        }}>Show me the good stuff!</button>
                    </article>
                </div>
            )
        }
    }}

export default WelcomeModal
