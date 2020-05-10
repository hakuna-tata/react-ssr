import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Switch, Route, Redirect } from 'react-router-dom';
import { matchRoutes } from "react-router-config";
import Routers from '../src/router';
import { Provider } from 'react-redux';
import { getStore } from './store';

export default (ctx, staticContext, template) => {
  return new Promise(resolve => {
    const store = getStore();
    // 组件嵌套情况需要深度匹配
    const matchedRoutes = matchRoutes(Routers, ctx.url);

    const promises = [];
    matchedRoutes.forEach(item => {
      if(item.route.loadData){
        promises.push(item.route.loadData(store))
      }
    })
    Promise.all(promises).then(() => {
      const content = renderToString((
        <Provider store={store}>
          <StaticRouter location={ctx.url} context={staticContext}>
            <Route path='/' render={() => <Redirect to='/index' />} exact />
            <Switch>
              {
                Routers.map(route => (
                  <Route {...route}/>
                ))
              }
            </Switch>
          </StaticRouter>
        </Provider>
      ))
      // 样式注入
      template = template.replace('<!-- <style></style> -->',`<style>
          ${staticContext.css.length ? staticContext.css.join('\n') : ''}
      </style>`)
      // 内容注入
      template = template.replace('<!-- <app></app> -->', content)
      // 数据注入
      template = template.replace('<!-- <script></script> -->', `<script>
          window.context = { state: ${JSON.stringify(store.getState())} }
      </script>`)
      resolve(template)
    })
  })
}