const Koa = require('koa');
const app = new Koa();

const Router = require('@koa/router')
const router = new Router()

router.get('/', ctx => {
  ctx.body = `这是主页`
})
router.get('/person', ctx => {
  ctx.body = {
    id: 1,
    name: 'Alica'
  }
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000);
