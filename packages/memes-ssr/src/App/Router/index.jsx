import React from 'react';
import { Switch, withRouter, Redirect, Route } from 'react-router-dom';
import Async from 'react-asynchronous-component';
import ErrorHandler from '@healthifyme/ui-components/lib/compounds/ErrorHandler/';
import { ROUTE_ERROR } from '../../Constants/app/app.constants';

import './styles.scss';

const AsyncHome = (props) => (
  <Async
    componentProps={props}
    load={import('../Modules/Home/Home.component' /* webpackChunkName: "home" */)}
  />
);
const AsyncErrorPage = (props) => (
  <Async
    componentProps={props}
    load={import('../Modules/ErrorPage/ErrorPage.component' /* webpackChunkName: "errorpage" */)}
  />
);
const AsyncMemePage = () => (
  <Async
    load={import('../Modules/MemePage/MemePage.component' /* webpackChunkName: "memepage" */)}
  />
);

const Routes = () => (
  <div className="routes-wrapper">
    <ErrorHandler>
      <Switch>
        <Route exact path="/" component={AsyncHome} />
        <Route exact path="/error/:type" component={AsyncErrorPage} />
        <Route exact path="/meme" component={AsyncMemePage} />
        <Redirect to={`/error/${ROUTE_ERROR.NOT_FOUND}`} />
      </Switch>
    </ErrorHandler>
  </div>
);
export default withRouter(Routes);
