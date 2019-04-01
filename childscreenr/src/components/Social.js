import React from 'react';

const Social = (props) => {
    return (
        < div >
            {props.testItemData.filter(data => data.category === 'socialSkills').map(data => {
                return <p>{data.test_item}</p>
            })}
        </div >

    )
}

export default Social