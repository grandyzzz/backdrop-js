import React, { Component } from 'react';
import './SHeader.sass'
export default class SHeader extends Component {
    componentDidMount() {
        let el = document.querySelector('li.active');
        let line = document.querySelector('.active-line');

        let width = el.clientWidth;
        let x = el.offsetLeft;

        line.style.width = width + 'px';
        line.style.transform = 'translateX(' + x + 'px)';
    }
    render() {
        return (
            <header>
                <div className="container">
                    <div className="sheader__inner">
                        <div className="humburger">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                            </svg>
                        </div>
                        <div className="content__title">
                            <h1>Личный кабинет</h1>
                        </div>
                    </div>
                </div>
                <nav>
                    <ul className="menu" onClick={this.setLine}>
                        <li>личные данные</li>
                        <li className="active">автомобили</li>
                        <li>прицепы</li>
                        <li>что-то ещё</li>
                        <div className="active-line"></div>
                    </ul>
                </nav>
            </header>
        )
    }
    setLine(e) {
        let el = e.target;
        if (e.target.tagName !== 'LI') return;

        let oldEl = document.querySelector('li.active');
        let line = document.querySelector('.active-line');

        oldEl.classList.remove('active');
        el.classList.add('active');

        let width = el.clientWidth;
        let x = el.offsetLeft;

        line.style.width = width + 'px';
        line.style.transform = 'translateX(' + x + 'px)';
    }
}
