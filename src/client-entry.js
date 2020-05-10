import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Routers from './router';
import { Provider } from 'react-redux';
import { getClientStore } from './store';

const App = () => (
  <Provider store={getClientStore()}>
     <BrowserRouter>
      <Switch>
        <Route path='/' render={() => <Redirect to='/index' />} exact />
        {
          Routers.map(route => (
            <Route {...route}/>
          ))
        }
      </Switch>
    </BrowserRouter>
  </Provider>
)

const renderMethod = module.hot ? ReactDom.render : ReactDom.hydrate;
renderMethod(<App />, document.getElementById("app"));