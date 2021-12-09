import React, {useState} from 'react';
import TicketMasterResults from './child-components/TicketMasterResults'
import { Button } from 'reactstrap';

const TicketMaster = () => {

    const baseUrl = "https://app.ticketmaster.com/discovery/v2/events.json" 
    const key = "ThDSqfPM86zkLQDzZETCoW16b5ewjjQi"
    const lat = localStorage.getItem('lat')
    const lng = localStorage.getItem('lng')

    const [pageNumber, setPageNumber] = useState(0);
    const [results, setResults] = useState([]);

    const fetchResults = () => {
        console.log("fetchResults called");
        let url = `${baseUrl}?apikey=${key}&latlon=${lat},${lng}&page=${pageNumber}`
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setResults(data._embedded.events))
        .catch(err => console.error(err))
    }

    const changePageNumber = (e, direction) => {
        e.preventDefault()
        if (direction === 'down') {
            if (pageNumber > 0) {
                setPageNumber(pageNumber-1);
                fetchResults();
            }
        }
        if (direction === 'up') {
            console.log(pageNumber);
            setPageNumber( pageNumber + 1 );
            console.log(pageNumber);
            fetchResults();
        }
    }

    const handleSubmit = (e) => {
        setPageNumber(0)
        fetchResults();
        e.preventDefault();
    }


    return (
        <div id="ticketmaster" className="ticketmaster">
            <div className="ticketmaster-submit">
                <h3>Events near your location: </h3>
                <Button onClick={handleSubmit}>View Events</Button>
            </div>
            {/* <TicketMasterResults results={results} changePageNumber={changePageNumber}/> */}
            {
                results.length > 0 ? <TicketMasterResults results={results} changePageNumber={changePageNumber}/> : null
            }           
        </div>
    )
}

export default TicketMaster;