import React from 'react';
import { Link } from 'react-router-dom'

const Social = (props) => {
    return (
        <div className="justify-content-center test-items">
            <h2>Social-Pragmatic Language</h2>

            {props.testItemData.filter(data => data.category === 'social').map(data => {
                return <div className="p-2 bd-highlight" key={data.id}>{data.id}: {data.test_item}
                    <button type="button" className="btn btn-outline-success accuracy" id={data.id} value="1" onClick={(e) => props.responseAccuracyButton(e)}>1</button>
                    <button type="button" className="btn btn-outline-danger align-self-center accuracy" id={data.id} value="0" onClick={(e) => props.responseAccuracyButton(e)}>0</button>
                    <input type="text" className="form-control form-control-sm notes" placeholder="Notes..." id={data.id}></input>

                    <div className="p-2 bd-highlight answer"><p>Correct: {data.correct_answer} </p><p>Incorrect: {data.incorrect_answer}</p></div>
                </div>

            })}


            <div className="col-xs-8 vertical-align-center">
                <div className="row justify-content-center">
                    <Link to="/redflags"> <button className="next btn btn-outline-success col-10 align-self-center">Next Section</button> </Link>
                </div>
            </div>
        </div >
    )
}

export default Social