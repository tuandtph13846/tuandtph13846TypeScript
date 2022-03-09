import React from 'react'

const ShowInfo = (props) => {
    console.log(props);
    return (
        <div>{props.data.name}</div>
    )
}
export default ShowInfo;