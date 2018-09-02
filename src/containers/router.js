import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home/Home';
import FormComp from './Form/Form';
import PredictiveSearch from './PredictiveSearch/PredictiveSearch';

const InnerRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/form" component={FormComp} />
      <Route path="/predictive-search" component={PredictiveSearch} />
    </div>
  </Router>
);

export default InnerRouter;