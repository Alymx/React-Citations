import React, { Component } from 'react';
//Import du fichier de citations struturees en JS
import citations from '../citations';
import Citer from './Citer';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            auteur: 'Ayn Rand',
            citation: 'Nous sommes tous frères sous la peau et j\'aimerais écorcher l\'humanité pour le prouver.',
        };
    }

    genererCitation = (event) => {
        //On transforme la liste en array
        const keyArray = Object.keys(citations);
        console.log("Les keys: ", keyArray);
        //Une citation au hasard
        const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
        if (this.state.citation !== citations[randomKey].citation) { this.setState(citations[randomKey]); }
        else { this.genererCitation(); }


    }

    componentWillMount() {
        this.genererCitation();
    }

    render() {
        let { citation, auteur } = this.state;

        return (
            <div>
                <Citer citation={citation} auteur={auteur} />
                <button onClick={(event) => this.genererCitation(event)}> Autre citation </button>
            </div>
        );
    }
}
