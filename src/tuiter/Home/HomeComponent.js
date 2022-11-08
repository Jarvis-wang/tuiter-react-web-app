import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./index.css";
import PostList from "../post-list"
import TuisList from"../tuits/TuitsList"
import WhatHappening from "./Whathappening";
import WhoToFollowList from '../who-to-follow-list/index'
const HomeComponent = () => {
    return (
        <>
            <WhatHappening/>
            <div className="row">
                <div className="col-8">
                    <TuisList/> 
                </div>
                <div className="col-3">
                    <WhoToFollowList />
                </div>
            </div>

        </>
    );
};

export default HomeComponent;


