import React from 'react';
import { Link } from 'react-router-dom'

const StudentInfo = (props) => {
    return (
        <div>
            <form>
                <div className="form-group row vertical-align-center">
                    <label className="row-sm-2 row-form-label row-form-label-sm " >Student First Name: </label>
                    <div className="row-sm-10 input">
                        <input type="text" className="form-control form-control-sm" id="firstName" placeholder="First Name" onChange={props.studentInfoForm}></input>
                    </div>

                </div>

                <div className="form-group row vertical-align-center">
                    <label className="row-sm-2 row-form-label row-form-label-sm " >Student Last Name: </label>
                    <div className="row-sm-10 input">
                        <input type="text" className="form-control form-control-sm" id="lastName" placeholder="Last Name"></input>
                    </div>
                </div>

                <div className="form-group row vertical-align-center">
                    <label className="row-sm-3 row-form-label row-form-label-sm " >Sex: </label>
                    <div className="row-sm-20 input">
                        <input type="text" className="form-control form-control-sm" placeholder="Male or Female"></input>
                    </div>
                </div>

                <div className="form-group row vertical-align-center">
                    <label className="row-sm-2 row-form-label row-form-label-sm " >Age: </label>
                    <div className="row-sm-10 input">
                        <input type="text" className="form-control form-control-sm" placeholder="mm/dd/yyyy"></input>
                    </div>
                </div>

                <div className="form-group row vertical-align-center">
                    <label className="row-sm-2 row-form-label row-form-label-sm " >Primary Language: </label>
                    <div className="row-sm-10 input">
                        <input type="text" className="form-control form-control-sm" placeholder="Primary Language"></input>
                    </div>
                </div>

                <div className="form-group row vertical-align-center">
                    <label className="row-sm-2 row-form-label row-form-label-sm " >Secondary Language: </label>
                    <div className="row-sm-10 input">
                        <input type="text" className="form-control form-control-sm" placeholder="Secondary Language"></input>
                    </div>
                </div>

                <div className="form-group row vertical-align-center">
                    <label className="row-sm-3 row-form-label row-form-label-sm " >Teacher Name: </label>
                    <div className="row-sm-10 input">
                        <input type="text" className="form-control form-control-sm" placeholder="Teacher Name"></input>
                    </div>
                </div>

                <div className="form-group row vertical-align-center">
                    <label className="row-sm-3 row-form-label row-form-label-sm " >Speech-Language Pathologist Name: </label>
                    <div className="row-sm-20 input">
                        <input type="text" className="form-control form-control-sm" placeholder="SLP Name"></input>
                    </div>
                </div>

            </form>
            <div className="col-xs-8 vertical-align-center">
                <div className="row justify-content-center">
                    <Link to="/receptive"> <button className="btn btn-outline-success col-10 align-self-center">Start Screening</button> </Link>
                </div>
            </div>
        </div>
    )
}

export default StudentInfo