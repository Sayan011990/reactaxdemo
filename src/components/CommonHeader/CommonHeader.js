import React, { Component, Fragment } from 'react';
import './CommonHeader.css';
import SkipNavigationLinks from './SkipLinks';
import {Logo} from './Logo/Logo';
import {Navigation} from './Navigation/Navigation';

export default class CommonHeader extends Component {
    render(){
        return(
            <div className="row header-row">
                    <SkipNavigationLinks />
                    <header className="container-fluid headerContainer">
                        <div className="container">
                            <Logo/>
                            <Navigation />
                        </div>
                    </header>
            </div>
        )
    }
}