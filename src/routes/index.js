import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import Home from '../entries/home';
import Aboutus from '../components/aboutus';

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={Home} />
    <Route path="/aboutus" component={Aboutus} />
    {/*<Route path="/completed" component={App} />*/}
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
