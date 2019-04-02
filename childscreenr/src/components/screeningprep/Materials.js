import React from 'react';
import { Link } from 'react-router-dom'

const Materials = () => {
    return (
        <div className="button-group-vertical">
            <button className="next btn btn-outline-success col-10 align-self-center" >Print Instructions</button>
            <button className="next btn btn-outline-success col-10 align-self-center" >Print Stimuli</button>
            <Link to="/studentinfo"><button className="next btn btn-outline-success col-10 align-self-center" >Enter Student Information</button></Link>
        </div>

    )
}

export default Materials