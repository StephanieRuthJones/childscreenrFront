import React from 'react';
import { Link } from 'react-router-dom'

const Expressive = (props) => {
    return (
        < div >
            <h1>Expressive Language</h1>
            {props.testItemData.filter(data => data.category === 'expressive').map(data => {
                return <div key={data.id}>
                    <h2>{data.id}: {data.test_item}</h2>
                    <ul>
                        <li>
                            <div className="row testItem">
                                <p>Correct Answer: {data.correct_answer}</p>
                                <div className="testItemButton">
                                    <button className="ui button">
                                        <i className="fas fa-check"></i>
                                    </button>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="row testItem">
                                <p>Incorrect Answer: {data.correct_answer}</p>
                                <div className="testItemButton">
                                    <button className="ui button">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            })
            }
            <Link to="/social">
                <div className="mt-3">
                    <button className="ui button">Next Section</button>
                </div>
            </Link>
        </div >



    )
}

export default Expressive