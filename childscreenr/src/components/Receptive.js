import React from 'react';
//need to pass props at app.js level
const Receptive = (props) => {
    return (

        < div >
            {props.testItemData.filter(data => data.category === 'receptive').map(data => {
                return <p>{data.test_item}</p>
            })}
        </div >


    )
}

export default Receptive