import React from 'react';
import { Link } from 'react-router-dom'

const ResultsChart = (props) => {
    return (
        < div >
            <h1>Results Chart</h1>

            <Link to="/report">
                <div>
                    <button className="ui button">Screening Report</button>
                </div>
            </Link>
        </div >

    )
}

export default ResultsChart