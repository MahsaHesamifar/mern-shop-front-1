import React from 'react';
import BackBtn from '../BackBtn/index';
const ProfileInfo = () => {
    return (
        <div className="profile-container">
            <div className="profile">
                <div className="info-box">
                    <div className="personal-info">
                        <h4>Personal information</h4>
                        <lable>username</lable>
                        <div className="info-text">@test</div>
                        <lable>email</lable>
                        <div className="info-text">test@gmail.com</div>
                        <lable>adress</lable>
                        <div className="info-text">test street , no 12</div>
                    </div>
                    <div className="profile-secondsection">
                        <div className="profile-avatar">Photo</div>
                        <div className="profile-logout">
                            <button>Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
            <BackBtn />
        </div>
    );
};
export default ProfileInfo;
