import React, { Component } from 'react';
import logo from '../assets/nba-logoman-word-white.svg';
export class TopBar extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        );
    }
}
