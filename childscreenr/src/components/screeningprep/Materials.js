import React from 'react';
import { Link } from 'react-router-dom'

const Materials = () => {
    return (
        <div className="row">
            <div className="button-group-vertical justify-content-center">
                <button className="btn btn-outline-success col-10 prep" >Print Instructions</button>
                <button className="btn btn-outline-success col-10 prep" >Print Stimuli</button>
                <Link to="/studentinfo"><button className="btn btn-outline-success col-10 prep" >Enter Student Information</button></Link>
            </div>
        </div>

    )
}

export default Materials