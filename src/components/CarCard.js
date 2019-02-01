import React, { Component } from 'react'
import './CarCard.sass'

export default class CarCard extends Component {
    constructor(props) {
        super(props);
        this.callBackdrop = this.callBackdrop.bind(this)
    }
    render() {
        return (
            <div className="card" onClick={this.callBackdrop}>
                <div  className="card__image"></div>
                <div className="card__content">
                    <div className="card__content__inner">
                        <h1 className="card__title">{ this.props.title }</h1>
                        <h2 className="card__subtitle">{ this.props.desc }</h2>
                    </div>
                </div>
            </div>
        )
    }
    callBackdrop() {
        this.props.onCardClicked({
            title: this.props.title,
            desc: this.props.desc,
            full_desc: this.props.full_desc
        })
    }
}
