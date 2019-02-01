import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './FHeader.sass'
export default class FHeader extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="header__inner">
                        <div className="content">
                            <div className="humburger">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                                </svg>
                            </div>
                            <div className="content__title">
                                <h1>Добавление водителя</h1>
                            </div>
                        </div>
                        <div className="action">
                            <Link to="/">Сохранить</Link>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
