import React, { useState, useEffect } from 'react';
import httpController from "../../services/httpController";
import { useHistory } from "react-router-dom";

export default function Profile() {
    const [ userInfo, setUserInfo ] = useState({});
    const history = useHistory();

    useEffect(() => {
        httpController.getUsersInfo()
            .then(setUserInfo)
            .catch(() => history.push('/login'));
    }, [history]);

    return (
        <div className="profile">
            { JSON.stringify(userInfo) }
        </div>
    );
};
