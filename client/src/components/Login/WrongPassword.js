import React from 'react'

const WrongPassword = (props) => (
    <h6 className="text-danger">
        Sorry, either you have entered an incorrect password for username "{props.username}"; OR, "{props.username}" does not exist in our database. If the latter is the case, please register by typing in a username and password and selecting "Register as a new user".
    </h6>
)

export default WrongPassword