import React, { Component } from 'react'
import './MaterialInput.sass'
export default class MaterialInput extends Component{
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };
        this.toggleClass = this.toggleClass.bind(this);
        this.watchInput = this.watchInput.bind(this);
    }
    render() {
        return (
            <div  className="input-field">
                <input onChange={this.watchInput}
                       onFocus={(e) => this.toggleClass(e, true)}
                       onBlur={(e) => this.toggleClass(e, false)} type={this.props.type} id={'#' + this.props.tag}/>
                <label className={ this.state.isToggleOn ? 'active' : '' } htmlFor={this.props.tag}>{this.props.content}</label>
            </div>
        )
    }
    toggleClass(e, value) {
        if ( e.target.value !== '' ) return;
        this.setState({isToggleOn: value});
    }
    watchInput(e) {
        this.props.onInputChanged({
            name: this.props.tag,
            value: e.target.value
        })
    }
}
