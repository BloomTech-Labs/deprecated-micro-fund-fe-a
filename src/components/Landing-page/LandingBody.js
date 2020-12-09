import React from 'react'
import './styles/Body.css'
import Profile from './profile-card'

export default class Body extends React.Component{

    render(){
        return(
            <div className="body">
                <h1 id="title">Featured Partners</h1>
                <div className="profile-container">
                <Profile />
                <Profile />
                <Profile />
                </div>
            </div>
        )
    }
}