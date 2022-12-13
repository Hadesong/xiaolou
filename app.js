const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static')

//设置静态文件，浏览器直接解析。。
app.use(serve(__dirname + '/views', { extensions: ["html"] }))

app.listen(3002)