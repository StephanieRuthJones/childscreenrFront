import React from 'react';
import { Link } from 'react-router-dom'

const Report = (props) => {
    return (
        < div >
            <h1>Report</h1>


            <Link to="/studentinfo">
                <div className="mt-3">
                    <button className="ui button">New Student</button>
                </div>
            </Link>
        </div >
    )
}

export default Report