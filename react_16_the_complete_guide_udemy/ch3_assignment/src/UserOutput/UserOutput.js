import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div>
            <p className="output-title">This is the user output component.</p>
            <p className="output"><em>{props.out}</em></p>
        </div>

    );
}

export default UserOutput;
