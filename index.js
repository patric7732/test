const express = require('express')
const app = express()
const port = 3000
const { User } = require('./models/User')
const config = require('./config/key')

app.use(express.json()) //For JSON requests
app.use(express.urlencoded({extended: true}));

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
}).then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res) => {
  //회원가입 할때 필요한 정보들을 client에서 가죠오ㅗ면 그것들을 데이터에서 가져옴

  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json ({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})