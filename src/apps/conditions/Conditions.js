import React from 'react';
import {
    Wrapper,
    Small,
    Loader
} from './Conditions.module.css'

const Conditions = (props) => {
    return (
        <div className={Wrapper}>

            {props.error && <small className={Small}>Please enter a valid city.</small>}

            {props.loading && <div className={Loader} />}


            {props.results.cod === 200 ?
                <div>
                    <p><strong>{props.results.name}</strong></p>
                    <p>It is currently {Math.round(props.results.main.temp)} degrees out with {props.results.weather[0].description}.</p>
                </div>
            : null
            }
        </div>
    )
}

export default Conditions;