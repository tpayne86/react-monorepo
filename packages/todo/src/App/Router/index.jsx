import React from 'react';
import {
  Switch, withRouter, Redirect, Route,
} from 'react-router-dom';
import Async from 'react-asynchronous-component';
import { ErrorHandler } from '@healthifyme/components';
import { ROUTE_ERROR } from '../../Constants/app/app.constants';

import './styles.scss';


const AsyncErrorPage = props => (
  <Async
    componentProps={props}
    load={import('../Modules/ErrorPage/ErrorPage.component' /* webpackChunkName: "errorpage" */)}
  />
);
const AsyncTodo = props => (
  <Async
    componentProps={props}
    load={import('../Modules/Todo/Todo.component'/* webpackChunkName: "todo" */)}
  />
);

const Routes = () => (
  <div className="routes-wrapper">
    <ErrorHandler>
      <Switch>
        <Route exact path="/" component={AsyncTodo} />
        <Route exact path="/todo" component={AsyncTodo} />
        <Route exact path="/error/:type" component={AsyncErrorPage} />
        <Redirect to={`/error/${ROUTE_ERROR.NOT_FOUND}`} />
      </Switch>
    </ErrorHandler>
  </div>
);
export default withRouter(Routes);
