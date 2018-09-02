import React, { Component, Fragment } from 'react';
import InnerRouter from './router';



class Index extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <Fragment>
                <InnerRouter />
            </Fragment>
        )
    }
}

export default Index;