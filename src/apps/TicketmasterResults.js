import React from 'react';

const TicketmasterResults = (props) => {
    return(
        <div>
            <div>
            {props.results.map(result => {
                return(
                    <div key={result._id}>
                        <h3>{result.events.name}</h3>
                        
                        <p>
                            {result.events.dates.start}
                            <br />
                            {result.events.image.url}

                        </p>
                        
                        <a href={result.events.url}><button>Get Tickets!</button></a>
                    </div>
                )
            })}
            </div>

        </div>
    );
};

export default TicketmasterResults;