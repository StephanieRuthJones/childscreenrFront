import React from 'react';
import { Link } from 'react-router-dom'

const RedFlags = () => {
    return (

        < div >

            <h1>Red Flags</h1>

            <p>No joint attention</p>
            <button className="ui button">
                <i className="fas fa-check"></i>
            </button>
            <button className="ui button">
                <i className="fas fa-times"></i>
            </button>

            <p>No / limited / inappropriate eye contact</p>
            <button className="ui button">
                <i className="fas fa-check"></i>
            </button>
            <button className="ui button">
                <i className="fas fa-times"></i>
            </button>

            <p>Self-stimulates (flaps hands, spins, rocks)</p>
            <button className="ui button">
                <i className="fas fa-check"></i>
            </button>
            <button className="ui button">
                <i className="fas fa-times"></i>
            </button>

            <p>Excessive drooling</p>
            <button className="ui button">
                <i className="fas fa-check"></i>
            </button>
            <button className="ui button">
                <i className="fas fa-times"></i>
            </button>

            <p>Doesn't respond to own name</p>
            <button className="ui button">
                <i className="fas fa-check"></i>
            </button>
            <button className="ui button">
                <i className="fas fa-times"></i>
            </button>

            <p>Repeats non-communicative phrases</p>
            <button className="ui button">
                <i className="fas fa-check"></i>
            </button>
            <button className="ui button">
                <i className="fas fa-times"></i>
            </button>

            <p>Excessive use of jargon</p>
            <button className="ui button">
                <i className="fas fa-check"></i>
            </button>
            <button className="ui button">
                <i className="fas fa-times"></i>
            </button>

            <p>Persistent use of fixed topics of themes in conversation</p>
            <button className="ui button">
                <i className="fas fa-check"></i>
            </button>
            <button className="ui button">
                <i className="fas fa-times"></i>
            </button>

            <p>Speech cannot be understood more than 50% of the time</p>
            <button className="ui button">
                <i className="fas fa-check"></i>
            </button>
            <button className="ui button">
                <i className="fas fa-times"></i>
            </button>

            <p>Talks to self with no intent to communicate</p>
            <button className="ui button">
                <i className="fas fa-check"></i>
            </button>
            <button className="ui button">
                <i className="fas fa-times"></i>
            </button>

            <p>Takes a long time to respond or is unresponsive when spoken to</p>
            <button className="ui button">
                <i className="fas fa-check"></i>
            </button>
            <button className="ui button">
                <i className="fas fa-times"></i>
            </button>

            <p>Confused by simple directions</p>
            <button className="ui button">
                <i className="fas fa-check"></i>
            </button>
            <button className="ui button">
                <i className="fas fa-times"></i>
            </button>

            <p>Echoes or repeats questions and directions</p>
            <button className="ui button">
                <i className="fas fa-check"></i>
            </button>
            <button className="ui button">
                <i className="fas fa-times"></i>
            </button>

            <p>Displays a limited range of interests</p>
            <button className="ui button">
                <i className="fas fa-check"></i>
            </button>
            <button className="ui button">
                <i className="fas fa-times"></i>
            </button>

            <p>Difficulty naming common objects</p>
            <button className="ui button">
                <i className="fas fa-check"></i>
            </button>
            <button className="ui button">
                <i className="fas fa-times"></i>
            </button>

            <p>Speaks only 1-3 word phrases</p>
            <button className="ui button">
                <i className="fas fa-check"></i>
            </button>
            <button className="ui button">
                <i className="fas fa-times"></i>
            </button>

            <p>Unaware of others</p>
            <button className="ui button">
                <i className="fas fa-check"></i>
            </button>
            <button className="ui button">
                <i className="fas fa-times"></i>
            </button>

            <p>No joint attention</p>
            <button className="ui button">
                <i className="fas fa-check"></i>
            </button>
            <button className="ui button">
                <i className="fas fa-times"></i>
            </button>

            <p>No / inappropriate eye contact</p>
            <button className="ui button">
                <i className="fas fa-check"></i>
            </button>
            <button className="ui button">
                <i className="fas fa-times"></i>
            </button>

            <p>Self-stimulates (flaps hands, spins, rocks)</p>
            <button className="ui button">
                <i className="fas fa-check"></i>
            </button>
            <button className="ui button">
                <i className="fas fa-times"></i>
            </button>

            <p>Engages in repetitive behaviors</p>
            <button className="ui button">
                <i className="fas fa-check"></i>
            </button>
            <button className="ui button">
                <i className="fas fa-times"></i>
            </button>


            <Link to="/resultschart">
                <div className="mt-3">
                    <button className="ui button">See results</button>
                </div>
            </Link>
        </div >

    )
}

export default RedFlags