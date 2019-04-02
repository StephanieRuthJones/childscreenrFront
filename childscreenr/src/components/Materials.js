import React from 'react';
import { Link } from 'react-router-dom'

const Materials = () => {
    return (
        <div className="ui vertical basic buttons">
            <button className="ui button">Print Instructions</button>
            <button className="ui button">Print Stimuli</button>
            <Link to="/studentinfo"><button className="ui button">Enter Student Information</button></Link>
        </div>

    )
}

export default Materials