import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

function Protected(props) {

    let CMP = props.CMP;
    let history = useHistory(); 

    useEffect(() => {
        if (!localStorage.getItem('uEmail') && !localStorage.getItem('uPassword')) {
            history.push('/Login');
        } 
    }, [])

    return (
        <div>
            <CMP />
        </div>
    );
}

export default Protected;

