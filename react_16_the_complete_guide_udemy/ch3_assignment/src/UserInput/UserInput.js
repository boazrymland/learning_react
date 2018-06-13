import React from 'react';

const UserInput = (props) => {
    return (
        <div className="user-input">
            <label>Enter username: </label><input type='text' onChange={props.changeHandler} value={props.value}/>
        </div>
    );
};

export default UserInput;
