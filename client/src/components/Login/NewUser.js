import React from 'react'

const NewUser = (props) => (
    <h2 className={props.class}>
        {props.msg} {props.username}
    </h2>
)

export default NewUser