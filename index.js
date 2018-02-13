
const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const User1 = require('./app/api/senduser')//import ไฟล์

const App = new Koa()
const router = new Router()

App.use(bodyParser())
// router.post('/senduser',async function(context){
//
//   let data = context.request.body
//
//
//   if (2561-data.year<=20 ) {
//       context.body="young"
// }
// else{
//     context.body="Adult"
//   }
//
// })




// router.get('/:name',async function(context){
//
//   console.log(context.params.name)
//   context.body = context.params.name
//
// })
//
//
//
// router.get('/:name/:ages',async function(context){
//
//   console.log(context.params.name)
//   console.log(context.params.ages)
//   context.body = context.params.name
//   context.body += context.params.ages
//
// })


router.use('/user',User1.routes())//เรียกใช้ไฟล์senduser ที่ User1 ชื่อเดียวกับที่ importไฟล์มา


App.use(router.routes())
App.use(router.allowedMethods())



  console.log('App listen port 3000')
App.listen(3000)
