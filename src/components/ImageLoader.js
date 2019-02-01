import React, { Component } from 'react'
import './ImageLoader.sass'

export default class ImageLoader extends Component {
    render() {
        return (
            <div>
                <div className="add-photo" onClick={ () => {console.log('loading image...')}}>
                    <div className="plus">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>

                    </div>
                    <p>Добавить фото</p>
                </div>
            </div>
        )
    }
}
