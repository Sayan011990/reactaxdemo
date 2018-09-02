import React, { Component, Fragment } from 'react';
import CommonHeader from './../../components/CommonHeader/CommonHeader';
import { Helmet } from "react-helmet"; // For adding Title and Meta.
import './Home.css';
import logo from './../../assets/images/logo.png';
import { Tooltip } from 'reactstrap';


const pageTitleAndMeta = (
    <Helmet>
        <meta charSet="utf-8" />
        <title>Welcome : React Demo Project</title>
        <link rel="canonical" href="./demo-react/index" />
    </Helmet>
);


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {
        return (
            <Fragment>
                {pageTitleAndMeta}
                <div className="container-fluid">
                    <CommonHeader />
                    <main className="row main-content" id="mainContent">
                        <div className="container">
                            <div className="row logo-row">
                                <img src={logo} className="Applogo" alt="" />
                            </div>
                            <div className="row content-row">
                                <h1>Welcome to React Demo</h1>
                                <p>
                                    Please checkout the Accessibility and React examples by navigating
                                    through the main navigation links
                                </p>
                                <p>
                                    For quick reference to WCAG 2.0 Guidelines please navigate to <a id="tooltipLink" href="https://www.w3.org/TR/WCAG20/" target="_blank" aria-describedby="externalTool">WCAG 2.0 Guidelines</a>
                                    <div id="externalTool" className="hidden">
                                        External Link opens in new window
                                    </div>
                                </p>
                            </div>
                        </div>
                    </main>
                </div>
            </Fragment>
        )
    }
}