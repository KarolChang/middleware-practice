const express = require('express')
const app = express()
const port = 3000

const responseTime = require('response-time')

app.use(responseTime((req, res, time) => {
  const nowTime = new Date()
  const year = nowTime.getFullYear()
  const month = nowTime.getMonth() + 1
  const date = nowTime.getDate()
  const hour = nowTime.getHours()
  const minute = nowTime.getMinutes()
  const second = nowTime.getSeconds()
  console.log(`${year}-${month}-${date} ${hour}:${minute}:${second} | ${req.method} from ${req.url} | total time: ${time}ms`)
}))

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})