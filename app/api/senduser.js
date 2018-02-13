
const Router = require('koa-router')
const User = new Router()

User.post('/senduser',async function(context){
  let date = new Date()
  let data = context.request.body
  let result = data.name
  if (date.getFullYear() - (data.year-543) >= 20 )
  { result += "adult" }
  else {
      result += "teenager"
    }
    context.body = result
})


User.get('/:name',async function(context){

  console.log(context.params.name)
  context.body = context.params.name

})



User.get('/:name/:ages',async function(context){

  console.log(context.params.name)
  console.log(context.params.ages)
  context.body = context.params.name
  context.body += context.params.ages

})







module.exports = User//ให้ที่อื่นเรียนกใช้ได้
