const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const KoaStatic = require('koa-static');
const StaticProxy = require('koa-server-http-proxy');
const app = new Koa();
const router = new Router();

let template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');
const serverBundle = require('../dist/server').default;

router.get('*', async (ctx, next) => {
  const staticContext = { css:[] };
  let renderPage =  await serverBundle(ctx, staticContext, template);
  if(staticContext.notFound){
    ctx.status = 404;
  }
  if(staticContext.action === 'REPLACE'){
    ctx.status = 301;
    ctx.redirect(staticContext.url);
  }
  ctx.body = renderPage;
})

app.use(StaticProxy('/public',{
  target: 'http://localhost:3000',
  changeOrigin: true,
  pathRewrite: { '^/public': '' }
}))
app.use(KoaStatic(path.join(__dirname, '../dist')));
app.use(router.routes());


app.listen(3000, () => console.log('[Server] starting at port 3000'));