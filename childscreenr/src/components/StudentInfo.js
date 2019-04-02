import React from 'react';
import { Link } from 'react-router-dom'

const StudentInfo = () => {
    return (
        <div>
            <h1>Student Information Form</h1>
            <form className="ui form">
                <div className="field">
                    <label>Student First Name</label>
                    <input type="text" name="first-name" placeholder="First Name"></input>
                </div>
                <div className="field">
                    <label>Student Last Name</label>
                    <input type="text" name="last-name" placeholder="Last Name"></input>
                </div>
                <div className="field">
                    <label>Student Age</label>
                    <input type="text" name="age" placeholder="mm/dd/yyyy"></input>
                </div>
                <div className="field">
                    <label>Primary Language</label>
                    <input type="text" name="primary-language" placeholder="Primary Language"></input>
                </div>
                <div className="field">
                    <label>Secondary Language</label>
                    <input type="text" name="primary-language" placeholder="Secondary Language"></input>
                </div>
                <Link to="/receptive"> <button className="ui button">Start Screening</button> </Link>
            </form>
        </div>
    )
}

export default StudentInfo