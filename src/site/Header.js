import React from 'react';
import { Jumbotron, ButtonToggle, Container } from 'reactstrap';
import Weather from '../apps/weather';

const Header = (props) => {
    return(
        <div className="weather">
            <Jumbotron fluid>
                <Container fluid>
                <p>Something to see</p>
                <div>
                    <Weather />
                </div>
                {/* add weather fetching component */}
                <ButtonToggle color="info" size="lg" ></ButtonToggle>
                </Container>
            </Jumbotron>
        </div>
    
    );
};

export default Header;