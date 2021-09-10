import React from 'react';
import back from './back.png';

const BackBtn = () => {
    return (
        <div>
            <img className="back-image" src={back} alt=""></img>
            <div className="back-text">back</div>
        </div>
    );
};
export default BackBtn;
