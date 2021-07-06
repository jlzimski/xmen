
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
    
    let url = `${baseURL}lon=${lon}&lat=${lat}&dim=0.07&api_key=${key}`;

    return(
            <Card>
                <CardBody>
                    <h1>Current Location</h1>
                    <CardImg src={url}  alt="Nasa Satellite" width="750px" height="750px" />
                </CardBody> 
            </Card>
        
    )
}

export default NasaPic;
