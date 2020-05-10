import React from 'react';
import Index from '../views';
import NotFound from '../views/notFound';
import Login from '../views/login';
import Register from '../views/register';

export default [
  {
    path: '/index',
    component: Index,
    exact: true,
    key: 'index',
    loadData: Index.loadData
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    key: 'login'
  },
  {
    path: '/register',
    component: Register,
    exact: true,
    key: 'register'
  },
  {
    component: NotFound,
    key: 'notFound'
  }
]

// export default () => (
//   <Switch>
//     <Route path="/" exact component={Index}></Route>
//     <Route path="/login" component={Login}></Route>
//     <Route path="/register" component={Register}></Route>
//   </Switch>
// )