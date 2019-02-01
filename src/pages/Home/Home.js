import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Home.sass'
export default class Home extends Component {
    render() {
        return (
            <div className="main__inner">
                <div className="banner">
                    <h1 className="title">Для полного погружения: DevTools > Toggle device toolbar </h1>
                </div>
                <div className="container">
                    <h1 className="title">Test app from Konstantin</h1>
                    <div className="action-container">
                        <Link className="button" to="/first">Num one</Link>
                        <Link className="button" to="/second">Num two</Link>
                    </div>
                </div>
            </div>
        )
    }
}
