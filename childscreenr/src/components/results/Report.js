import React from 'react';
import { Link } from 'react-router-dom'

const Report = (props) => {
    return (
        < div >
            <h1>{props.firstName}'s Screening Summary Report</h1>
            <h2>Introduction</h2>
            <p>{props.firstName} {props.lastName}, a {props.age} old female, participated in a speech-language screening session. {props.firstName} responded accurately to {props.totalScore} out of 44 test items; this score falls within average range (within 1 standard deviation of the mean, z-score of {props.zScore}) when compared with preschool-age peers.</p>
            <h2>Receptive Language</h2>
            <p>Receptively, {props.firstName} was able to:</p>
            <ul>
                <li>Answer who, what, when, where questions</li>
                <li>Follow one- and two-step directions</li>
                <li>Follow directions with embedded prepositions: in, on, under</li>
                <li>Repeat three-word lists and sentences</li>
                <li>Identify colors: red, blue</li>
                <li>Identify all pictured items in a labeled category: animals, foods</li>
            </ul>
            <p>However, {props.firstName} was unable to:</p>
            <ul>
                <li>Answer why questions</li>
                <li>Follow three-step directions</li>
                <li>Follow directions with embedded prepositions: in, on, under</li>
                <li>Follow directions with embedded prepositions: next to</li>
                <li>Identify colors: black, green, orange</li>

            </ul>


            <h2>Expressive Language</h2>
            <p>Expressively, {props.firstName} was able to:</p>
            <ul>
                <li>Label common items: car, bird, baby</li>
                <li>Follow directions with embedded prepositions: in, on, under</li>
                <li>Describe salient features (at least 3 descriptors of category, action, parts, looks, texture, etc.) of a labeled item: dog, apple</li>
                <li>Label opposites during sentence completion tasks: big, small, fast, slow</li>
                <li>Tell a story that includes: beginning, middle</li>
                <li>Use age-appropriate grammar</li>

            </ul>
            <h2>{props.firstName} was unable to:</h2>
            <ul>
                <li>Label opposites during sentence completion tasks: short, tall</li>
                <li>Tell a story that includes: end</li>
            </ul>

            <h2>Social-Pragmatic Language</h2>
            <p>In the area of social-pragmatic language, {props.firstName} was able to: </p>
            <ul>
                <li>Make appropriate eye contact</li>
                <li>Take turns in conversation</li>
                <li>Ask questions</li>
                <li>Respond appropriately to questions</li>
                <li>Demonstrate appropriate body positioning</li>
                <li>Demonstrate functional play with toys</li>
            </ul>

            <p>{props.firstName} did not demonstrate the ability to:</p>
            <ul>
                <li>Identify pictured emotions: tired</li>
                <li>Ask questions</li>
            </ul>



            <h2>Red Flags</h2>
            <p>{props.firstName} demonstrated the following red flags, which identify behavioral or developmental markers that suggest the need for further evaluation:</p>
            <ul>
                <li>Excessive drooling</li>
                <li>Takes a long time to respond</li>
            </ul>


            <h2>Conclusion and Recommendations</h2>
            <p>{props.firstName} {props.lastName}, a {props.age} old preschool student at {props.schoolName}, participated in a speech-language screening. {props.firstName}’s score of 39/44 is within average range when compared with classmate performance. However, due to the presence of developmental red flags, it is recommended that {props.firstName} participate in a comprehensive speech-language evaluation to determine the presence of any speech-language disorders that warrant school-based services.</p>



            <Link to="/studentinfo">
                <div className="mt-3">
                    <button className="ui button">New Student</button>
                </div>
            </Link>
        </div >
    )
}

export default Report