const express = require('express')
const app = express()
app.use((req, res, next) => {
  console.log('有人请求了服务器');
  next()
})
app.get('/student', (req, res) => {
  const students = [
    { id: '001', name: 'tom', age: 18 },
    { id: '002', name: 'jerry', age: 19 },
    { id: '003', name: 'tony', age: 12 }
  ]
  res.send(students)
})
app.listen(5000, (err) => {
  if (!err)
    console.log('服务器1启动成功，地址为：http://localhost:5000/student');
})