// API KEY = HSkfDy1fyixzHxV8mgTWRtKiQ8F82tEDzhqqOAuA
// URL = https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&dim=0.15&api_key=API_KEY
// dim-width and height for image in degrees; default .025

import React from 'react';
import {
    Card,
    CardImg,
    CardBody
} from 'reactstrap';

const baseURL = 'https://api.nasa.gov/planetary/earth/imagery?';
const key = 'HSkfDy1fyixzHxV8mgTWRtKiQ8F82tEDzhqqOAuA';

const NasaPic = (props) => {
    
    const lat = props.lat;
    const lon = props.lon;
    
    let url = `${baseURL}lon=${lon}&lat=${lat}&dim=0.15&api_key=${key}`;

    return(
        <div>
            <Card>
                <CardBody>
                    <CardImg src={url} className="nasaImg" alt="Nasa Satellite" width="500" height="600" />
                </CardBody> 
            </Card>
        </div>
    )
}

export default NasaPic;