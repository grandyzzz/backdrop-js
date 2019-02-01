import React, { Component } from 'react'
import './First.sass'
import FHeader from "../../components/FHeader";
import ImageLoader from "../../components/ImageLoader";
import MaterialInput from '../../components/MaterialInput'

export default class First extends Component {
    render() {
        return (
            <div className="main">
                <FHeader/>
                <div className="container">
                    <section className="info">
                        <h2>Фото</h2>
                        <ImageLoader/>
                        <MaterialInput
                            type="text"
                            tag="last_name"
                            content="Фамилия"/>
                        <MaterialInput
                            type="text"
                            tag="first_name"
                            content="Имя"/>
                        <MaterialInput
                            type="email"
                            tag="email"
                            content="E-mail"/>
                        <MaterialInput
                            type="tel"
                            tag="phone"
                            content="Телефон"/>
                    </section>
                    <section className="passport">
                        <h1>Паспорт</h1>
                        <ImageLoader/>
                    </section>
                    <section className="drive-doc">
                        <h1>Водительское удостоверение</h1>
                        <ImageLoader/>
                    </section>
                    <section className="access-rights">
                        <h1>Права доступа</h1>
                        <div className="input-field-choose">
                            <input type="checkbox" id="company-privacy" name="company-privacy" />
                            <label htmlFor="company-privacy">Изменение личных данных компании</label>
                        </div>
                        <div className="input-field-choose">
                            <input type="checkbox" id="friend-req" name="friend-req" />
                            <label htmlFor="friend-req">Работа с запросами на партнёрство</label>
                        </div>
                    </section>
                    <section className="trans-manage">
                        <h1>Управление перевозками</h1>
                            <div className="input-field-choose disabled">
                                <input type="radio" id="trans-own" name="trans-own" value="trans-own" disabled={true} />
                                <label htmlFor="trans-own">Только своими</label>
                            </div>
                            <div className="input-field-choose disabled">
                                <input type="radio" id="trans-all" name="trans-all" disabled={true} />
                                <label htmlFor="trans-all">Всеми заявками</label>
                            </div>
                    </section>
                </div>
            </div>
        )
    }

}
