import React from 'react';
import { Card, CardTitle, CardImg } from 'reactstrap';
import './ticketMasterResults.css'
import { Button } from 'reactstrap';

const TicketMasterResults = (props) => {

    console.log(props.results);

    return (
        <div>
            <div className="page-buttons">
                <Button onClick={(e) => props.changePageNumber(e, 'down')}>Previous 10</Button>
                <Button onClick={(e) => props.changePageNumber(e, 'up')}>Next 10</Button>
            </div>
            <div className="tm">
                {props.results.map(result => {
                    return (
                        <a href={result.url} key={result.id}>
                            <Card className="text-center" body>
                                <CardTitle tag="h5">{result.name}</CardTitle>
                                <CardImg className="cardImages" alt="EventImage" src={result.images[0].url} height="100px" width="100px" />
                            </Card>
                        </a>
                    )
                
                })}
            </div>
            
        </div>
    )
}

export default TicketMasterResults;