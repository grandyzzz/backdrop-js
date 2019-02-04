import React, { Component } from 'react'
import SHeader from "../../components/SHeader";
import CarCard from "../../components/CarCard";
import './Second.sass'

const cars = [
    {
        title: 'Petribilt Crossfire',
        description: '102кх/102',
        full_description: 'Формировании существенных финансовых и административных условий.'
    },
    {
        title: 'Petribilt Crossfire',
        description: '102кх/102',
        full_description: 'Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий. важную роль в формировании существенных финансовых и административных условий. важную роль в формировании существенных финансовых и административных условий. важную роль в формировании существенных финансовых и административных условий. важную роль в формировании существенных финансовых и административных условий. важную роль в формировании существенных финансовых и административных условий. важную роль в формировании существенных финансовых и административных условий.'
    },
    {
        title: 'Petribilt Crossfire',
        description: '102кх/102',
        full_description: 'Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий.'
    },
    {
        title: 'Petribilt Crossfire',
        description: '102кх/102',
        full_description: 'Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий.'
    },
    {
        title: 'Petribilt Crossfire',
        description: '102кх/102',
        full_description: 'Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий.'
    },
    {
        title: 'Petribilt Crossfire',
        description: '102кх/102',
        full_description: 'Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий.'
    },
    {
        title: 'Petribilt Crossfire',
        description: '102кх/102',
        full_description: 'Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий.'
    },
    {
        title: 'Petribilt Crossfire',
        description: '102кх/102',
        full_description: 'Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий.'
    },
    {
        title: 'Petribilt Crossfire',
        description: '102кх/102',
        full_description: 'Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий.'
    },
    {
        title: 'Petribilt Crossfire',
        description: '102кх/102',
        full_description: 'Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий.'
    },
];
export default class Second extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            desc: '',
            fullDesc: '',
            realContent: 0
        };

        this.handleBackdrop = this.handleBackdrop.bind(this)
    }
    componentDidMount() {
        let backdrop = document.querySelector('.backdrop');
        let motionLayer = document.getElementById('motion-layer');
        this.closeLayer = document.querySelector('.backdrop-close-layer');
        this.closeLayer.addEventListener('click', function () {
            backdrop.style.transform = `translateY(${backdropH}px)`;
            document.body.classList.remove('backdrop--opened');
            this.style.display = 'none';
        });

        let backdropH = backdrop.clientHeight;

        backdrop.style.transform = 'translateY(' + backdropH + 'px)';

        let ox = 0,
            nx = 0,
            d  = 0;
        let from = 0;
        let result = 0;
        let self = this;
        let topLine;

        motionLayer.addEventListener('touchstart', function (e) {
            ox = e.changedTouches[0].clientY;
            from = parseInt(backdrop.style.transform.replace( /^\D+/g, ''), 10)
        });
        motionLayer.addEventListener('touchmove', function (e) {
            nx = e.changedTouches[0].clientY;
            d = nx - ox;
            result = d + from;
            if (result <= 7 && result !== 0) {
                backdrop.style.transform = 'translateY(0px)'
            } else {
                backdrop.style.transform = 'translateY(' + result + 'px)'
            }
        });
        motionLayer.addEventListener('touchend', function (e) {
            topLine = self.realContent * 0.33;
            if (result <= topLine) {
                backdrop.style.transform = 'translateY(0px)'
            } else {
                if (self.realContent !== backdropH) {
                    if (result > self.realContent) {
                        backdrop.style.transform = 'translateY(' + backdropH + 'px)';
                        document.body.classList.remove('backdrop--opened');
                        self.closeLayer.style.display = 'none';
                    } else {
                        backdrop.style.transform = 'translateY(' + self.realContent + 'px)'
                    }

                } else {
                    backdrop.style.transform = 'translateY(' + backdropH + 'px)';
                    document.body.classList.remove('backdrop--opened');
                    self.closeLayer.style.display = 'none';
                }
            }
        });
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.showBackdrop()
    }
    render() {
        return (
            <div>
                <SHeader/>
                <div className="main__second">
                    <div className="container">
                        <div className="main__second__inner">
                            { cars.map((car, i) => {
                                let { title, description, full_description } = car;
                                return (
                                    <CarCard
                                        onCardClicked={this.handleBackdrop}
                                        key={i}
                                        title={title}
                                        desc={description}
                                        full_desc={full_description}
                                    />
                                )
                            }) }
                        </div>
                    </div>
                    <div className="backdrop">
                        <div id="motion-layer"></div>
                        <div className="backdrop__title">
                            <div className="container">
                                <h1>{ this.state.title }</h1>
                            </div>
                        </div>
                        <div className="backdrop__content">
                            <div id="backdrop-inner" className="container">
                                <p>{ this.state.fullDesc }</p>
                            </div>
                        </div>
                    </div>
                    <div className="backdrop-close-layer">

                    </div>
                </div>
            </div>
        )
    }
    handleBackdrop(data) {

        this.setState({
            title: data.title,
            desc: data.desc,
            fullDesc: data.full_desc
        });



    }
    showBackdrop() {
        let backdrop = document.querySelector('.backdrop');

        let titleH = document.querySelector('.backdrop__title').clientHeight;
        let contentH = document.getElementById('backdrop-inner').clientHeight;
        let backdropH = backdrop.clientHeight;

        let main = titleH + contentH;
        backdrop.style.opacity = 1;
        document.body.classList.add('backdrop--opened');
        if (main >= backdropH) {
            backdrop.style.transform = 'translateY(0px)';
            this.realContent = backdropH
        } else {
            backdrop.style.transform = 'translateY(' + (backdropH - main) + 'px)';
            this.realContent = backdropH - main
        }
        this.closeLayer.style.display = 'block';



    }
}
