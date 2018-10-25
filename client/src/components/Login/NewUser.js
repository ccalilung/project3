import React from 'react'

const NewUser = (props) => (
    <h5 className={props.class}>
        {props.msg} {props.username}
    </h5>
)

export default NewUser