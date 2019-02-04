import React, { Component } from 'react'
import './First.sass'
import FHeader from "../../components/FHeader";
import ImageLoader from "../../components/ImageLoader";
import MaterialInput from '../../components/MaterialInput'



export default class First extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputsData: [
                {
                    type: 'text',
                    tag: 'last_name',
                    content: 'Фамилия'
                },
                {
                    type: 'text',
                    tag: 'first_name',
                    content: 'Имя'
                },
                {
                    type: 'email',
                    tag: 'email',
                    content: 'E-mail'
                },
                {
                    type: 'tel',
                    tag: 'phone',
                    content: 'Телефон'
                }
            ]
        };

        this.handleInput = this.handleInput.bind(this);
    }
    render() {
        return (
            <div className="main">
                <FHeader/>
                <div className="container">
                    <section className="info">
                        <h2>Фото</h2>
                        <ImageLoader/>
                        {
                            this.state.inputsData.map((input, i) => {
                                let { type, tag, content } = input;
                                return (
                                    <MaterialInput
                                        onInputChanged={this.handleInput}
                                        type={type}
                                        tag={tag}
                                        content={content}
                                        key={i}/>
                                )
                            })
                        }
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
    handleInput(data) {
        let index = this.state.inputsData.findIndex(input => input.tag === data.name);
        this.setState({
            inputsData: [
                ...this.state.inputsData.slice(0, index),
                Object.assign({}, this.state.inputsData[index], { value: data.value }),
                ...this.state.inputsData.slice(index + 1)
            ]
        });
        console.log(this.state.inputsData)
    }

}
