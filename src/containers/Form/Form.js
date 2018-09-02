import React, {Component, Fragment} from 'react';
import CommonHeader from './../../components/CommonHeader/CommonHeader';
import {Helmet} from "react-helmet"; // For adding Title and Meta.
import './Form.css';


const pageTitleAndMeta = (
    <Helmet>
        <meta charSet="utf-8" />
        <title>Form Component : React Demo Project</title>
        <link rel="canonical" href="./demo-react/index" />
    </Helmet>
);



export default class FormComp extends Component {
    constructor(){
        super();
        this.state = {
            fName : '',
            lName : '',
            email : '',
            curaddress1 : '',
            peraddress1: '',
            hasError: false,
            errMsg: [],
            showErr: true
        }
    }

    onFormValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const fields = ['fName', 'lName', 'email', 'curaddress1', 'peraddress1'];

        fields.map(field => (
            (document.querySelector('#' + field).hasAttribute('aria-invalid')) ? document.querySelector('#' + field).removeAttribute('aria-invalid') : '',
            (document.querySelector('#' + field).hasAttribute('aria-describedby')) ? document.querySelector('#' + field).removeAttribute('aria-describedby') : ''
        ));
        this.setState({
            hasError: false,
            errMsg: [],
            showErr: true
        })
        
        const { fName, lName, email, curaddress1, peraddress1, errMsg, hasError } = this.state;

        
        const errors = [];
        if(fName === ""){
            errors.push({fieldName: "fName", errMsg: "First Name cannot be empty"});
        }
        if(lName === ""){
            errors.push({fieldName: "lName", errMsg: "Last Name cannot be empty"});
        }
        if(email === ""){
            errors.push({fieldName: "email", errMsg: "Email cannot be empty"});
        } else if(email.split('').filter(x => x === '@').length !== 1){
            errors.push({fieldName: "email", errMsg: "Not a valid email"});
        }
        if(curaddress1 === ""){
            errors.push({fieldName: "curaddress1", errMsg: "Current Address 1 cannot be empty"});
        }
        if(peraddress1 === ""){
            errors.push({fieldName: "peraddress1", errMsg: "Permanent Address 1 cannot be empty"});
        }
        errors.map(error => (
            document.querySelector('#' + error.fieldName).setAttribute('aria-invalid', true),
            document.querySelector('#' + error.fieldName).setAttribute('aria-describedby', error.fieldName + '_err')
        ));

        this.setState({
            hasError: true,
            errMsg: errors
        })

    }

    componentDidUpdate = () => {

        if(this.state.showErr && document.querySelector('.alert-danger')){
            document.querySelector('.alert-danger').focus();
            this.setState({
                showErr: false
            })
        }
    }
    

    render(){
        const ShowErrors = () => (
            (this.state.hasError) ?
                <div className="alert alert-danger" role="alert" tabIndex="-1">
                    <h3>Error</h3>
                    <ul>
                   {this.state.errMsg.map((error, index) => (
                        <li key={index}>
                            <span id={error.fieldName + '_err'}>{error.errMsg} </span>
                            <a href={'#' + error.fieldName}>(Jump to the field)</a>
                        </li>
                    ))}
                    </ul>
                </div> : null
        )

        
        return(
            <Fragment>
                {pageTitleAndMeta}
                <div className="container-fluid">
                    <CommonHeader />
                    <main className="row main-content" id="mainContent">
                        <div className="container">
                            <div className="row content-row">
                                <h1>Form Component with Validation</h1>
                                <div className="form-container col-xs-12 col-sm-12 col-md-8 col-lg-8 col-lg-offset-2">
                                    <h2>Please enter the following details and submit</h2>
                                    <p>Fields marked with <span className="red" aria-label="star icon">*</span> are required</p>
                                    <ShowErrors />
                                    <div className="row">
                                        <form onSubmit={this.handleSubmit} noValidate>
                                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="fName">First Name <span className="red" aria-label="required field">*</span></label>
                                                    <input id="fName" required type="text" className="form-control"
                                                    name="fName" onChange={this.onFormValueChange} />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="lName">Last Name <span className="red" aria-label="required field">*</span></label>
                                                    <input id="lName" required type="text" className="form-control"
                                                    name="lName" onChange={this.onFormValueChange} />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email address <span className="red" aria-label="required field">*</span></label>
                                                    <input id="email" required type="email" className="form-control"
                                                    name="email" onChange={this.onFormValueChange} />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="gender">Gender</label>
                                                    <select id="gender" className="form-control">
                                                        <option value="1">Male</option>
                                                        <option value="2">Female</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xs-12">
                                                <fieldset>
                                                    <legend>Current Address</legend>
                                                    <div className="form-group">
                                                        <label htmlFor="curaddress1">Address Line 1 <span className="red" aria-label="required field">*</span></label>
                                                        <input id="curaddress1" required type="text" className="form-control"
                                                        name="curaddress1" onChange={this.onFormValueChange} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="curaddress2">Address Line 2</label>
                                                        <input id="curaddress2" type="text" className="form-control"
                                                        name="curaddress2" />
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <div className="col-xs-12">
                                                <fieldset>
                                                    <legend>Permanent Address</legend>
                                                    <div className="form-group">
                                                        <label htmlFor="peraddress1">Address Line 1 <span className="red" aria-label="required field">*</span></label>
                                                        <input id="peraddress1" required type="text" className="form-control"
                                                        name="peraddress1" onChange={this.onFormValueChange} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="peraddress2">Address Line 2</label>
                                                        <input id="peraddress2" type="text" className="form-control"
                                                        name="peraddress2" />
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <div className="col-xs-12">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </Fragment>
        )
    }
}