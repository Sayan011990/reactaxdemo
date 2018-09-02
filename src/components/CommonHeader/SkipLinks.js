import React, { Component } from 'react';
import SkipNav from 'react-skip-nav';
import './SkipLinks.css';

export default class SkipNavigationLinks extends Component {
    render() {
        return (
            <div className="skip-content-wrapper">
                <div className="container">
                    <ul>
                        <li>
                            <SkipNav
                            id='main-content'
                            text='Skip to Main Content'
                            targetDomId='mainContent'
                            />
                        </li>
                        {/* <li>
                            <SkipNav
                            id='main-footer'
                            text='Skip to Footer'
                            targetDomId='footer'
                            />
                        </li> */}
                    </ul>
                </div>
            </div>
        )
    }
}