import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => (
    <nav className="col-xs-12 col-md-8 col-lg-10 navigation">
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/form'}>Form Component</Link>
            </li>
            <li>
                <Link to={'/predictive-search'}>Predictive Search</Link>
            </li>
        </ul>
    </nav>
)