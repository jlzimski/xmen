import React from 'react';

const TicketmasterResults = (props) => {
    return(
        <div>
            <div>
            {props.results.map(result => {
                return(
                    <div key={result._id}>
                        <h3>{result.name}</h3>
                        {/* {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : ''} */}
                        <p>
                            {result.dates.start}
                            <br />
                            {/* {result.keywords.length > 0 ? ' Keywords: ' : ''} */}
                        </p>
                        <ul>
                            {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}
                        </ul>
                        <a href={result.url}><button>Get Tickets!</button></a>
                    </div>
                )
            })}
            </div>
            <button onClick={(e) => props.changePageNumber(e, 'down')}>Previous 10</button>
            <button onClick={(e) => props.changePageNumber(e, 'up')}>Next 10</button>
        </div>
    );
};

export default TicketmasterResults;