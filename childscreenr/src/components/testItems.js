import React from 'react';

const TestItems = (props) => {
    console.log(props.testItemData)
    return (

        < div >
            {props.testItemData.map(data => {
                return <div><p>{data.test_item}</p></div>
            })}
        </div >

    )
}

export default TestItems