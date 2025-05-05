const express  = require("express");
const { exec } = require('child_process');
const port = 3917

const app = express()

app.use('/consumer', (req, res)=>{

  const filepath = '/var/www/shopping/shopping-consumer'

  exec(`git -C ${filepath} pull`, (error, stdout, stderr)=>{
    if (error) {
      console.error(`执行 git pull 时出错: ${error}`);
      return res.status(500).send(`执行 git pull 时出错: ${error.message}`);
    }
    if (stderr) {
      console.error(`执行 git pull 时的错误输出: ${stderr}`);
      return res.status(500).send(`执行 git pull 时的错误输出: ${stderr}`);
    }
    console.log(`git pull 执行成功: ${stdout}`);
    res.send(`git pull 执行成功: ${stdout}`);
  })
  

})

app.listen(port, () => {
  console.log(`autoPull listening on port ${port}`);
});