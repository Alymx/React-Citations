
import React from 'react';

const Citer = (props) => {
    console.log(props.citation + " - " + props.auteur);

    return (
        <div>
            <p>
                #AL: {props.citation}
                <span> -- {props.auteur} </span>
            </p>
        </div>
    )
}

export default Citer;
