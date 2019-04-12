import React from 'react';
import { Link } from 'react-router-dom'

const Materials = () => {
    return (
        <div className="row justify-content-center">
            <div className="button-group-vertical">
                <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/presentation/d/1KLXSclmyQ7Wyo3C71LundC6ez5irKN_Uvgggh-j3ijY/edit?usp=sharing"><button className="btn btn-dark col-10 prep" >Print Stimuli</button></a>
                <Link to="/studentinfo"><button className="btn btn-outline-success col-10 prep" >Enter Student Information</button></Link>
            </div>
        </div >

    )
}

export default Materials
