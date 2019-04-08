import React from 'react';
import { Link } from 'react-router-dom'

const RedFlags = () => {
    return (

        <div className="justify-content-center test-items">
            <h2>Red Flags</h2>

            <div className="p-2 bd-highlight">
                <p>No joint attention
                    <input type="checkbox" className="checkbox"></input></p>
            </div>

            <div className="p-2 bd-highlight">
                <p>Decreased or inappropriate eye contact
                    <input type="checkbox" className="checkbox"></input></p>
            </div>

            <div className="p-2 bd-highlight">
                <p>Self-stimulates (flaps hands, spins, rocks)
                    <input type="checkbox" className="checkbox"></input></p>
            </div>

            <div className="p-2 bd-highlight">
                <p>Excessive drooling
                    <input type="checkbox" className="checkbox"></input></p>
            </div>

            <div className="p-2 bd-highlight">
                <p>Does not respond to own name
                    <input type="checkbox" className="checkbox"></input></p>
            </div>

            <div className="p-2 bd-highlight">
                <p>Repeats non-communicative phrases
                    <input type="checkbox" className="checkbox"></input></p>
            </div>

            <div className="p-2 bd-highlight">
                <p>Excessive use of jargon
                    <input type="checkbox" className="checkbox"></input></p>
            </div>

            <div className="p-2 bd-highlight">
                <p>Speech cannot be understood more than 50% of the time
                    <input type="checkbox" className="checkbox"></input></p>
            </div>

            <div className="p-2 bd-highlight">
                <p>Takes a long time to respond or is unresponsive when spoken to
                    <input type="checkbox" className="checkbox"></input></p>
            </div>

            <div className="p-2 bd-highlight">
                <p>Echolalia
                    <input type="checkbox" className="checkbox"></input></p>
            </div>

            <div className="col-xs-8 vertical-align-center">
                <div className="row justify-content-center">
                    <Link to="/resultschart"> <button className="next btn btn-outline-success col-10 align-self-center">View Results</button> </Link>
                </div>
            </div>
        </div >

    )
}

export default RedFlags