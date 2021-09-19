import React from 'react';
import { useHistory } from 'react-router-dom';
import back from './back.png';

const BackBtn = () => {
    const history = useHistory();
    const pageHandeler = () => {
        history.push('/');
    };
    return (
        <div onClick={pageHandeler}>
            <img className="back-image" src={back} alt=""></img>
            <div className="back-text">back</div>
        </div>
    );
};
export default BackBtn;
