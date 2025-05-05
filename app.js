const express  = require("express");
const { exec } = require('child_process');
const port = 3917

const app = express()

app.use('/consumer', (req, res)=>{
  const filepath = '/var/www/shopping/shopping-consumer'
  exec(`git -C ${filepath} pull`, (error, stdout, stderr)=>{
    if (error) {
      console.error(`consumer 执行 git pull 时出错: ${error}`);
      return res.status(500).send(`执行 git pull 时出错: ${error.message}`);
    }
    if (stderr) {
      console.error(`consumer 执行 git pull 时的错误输出: ${stderr}`);
      return res.status(500).send(`执行 git pull 时的错误输出: ${stderr}`);
    }
    console.log(`consumer git pull 执行成功: ${stdout}`);
    // res.send(`git pull 执行成功: ${stdout}`);
    exec(`npm install --prefix ${filepath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`执行 npm install 时出错: ${error}`);
        return res.status(500).send(`执行 npm install 时出错: ${error.message}`);
      }
      if (stderr) {
        console.error(`执行 npm install 时的错误输出: ${stderr}`);
        return res.status(500).send(`执行 npm install 时的错误输出: ${stderr}`);
      }
      console.log(`npm install 执行成功: ${stdout}`);
      res.send(`部署完成！\nGit Pull 输出: ${stdout}\nNPM Install 输出: ${stdout}`);
    });
  })
})

app.use('/seller', (req, res)=>{
  const filepath = '/var/www/shopping/shopping-seller-pc'
  exec(`git -C ${filepath} pull`, (error, stdout, stderr)=>{
    if (error) {
      console.error(`seller 执行 git pull 时出错: ${error}`);
      return res.status(500).send(`执行 git pull 时出错: ${error.message}`);
    }
    if (stderr) {
      console.error(`seller 执行 git pull 时的错误输出: ${stderr}`);
      return res.status(500).send(`执行 git pull 时的错误输出: ${stderr}`);
    }
    console.log(`seller git pull 执行成功: ${stdout}`);
    exec(`npm install --prefix ${filepath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`执行 npm install 时出错: ${error}`);
        return res.status(500).send(`执行 npm install 时出错: ${error.message}`);
      }
      if (stderr) {
        console.error(`执行 npm install 时的错误输出: ${stderr}`);
        return res.status(500).send(`执行 npm install 时的错误输出: ${stderr}`);
      }
      console.log(`npm install 执行成功: ${stdout}`);
      res.send(`部署完成！\nGit Pull 输出: ${stdout}\nNPM Install 输出: ${stdout}`);
    });
  })
})

app.use('/admin', (req, res)=>{
  const filepath = '/var/www/shopping/shopping-admin-pc'
  exec(`git -C ${filepath} pull`, (error, stdout, stderr)=>{
    if (error) {
      console.error(`admin 执行 git pull 时出错: ${error}`);
      return res.status(500).send(`执行 git pull 时出错: ${error.message}`);
    }
    if (stderr) {
      console.error(`admin 执行 git pull 时的错误输出: ${stderr}`);
      return res.status(500).send(`admin 执行 git pull 时的错误输出: ${stderr}`);
    }
    console.log(`admin git pull 执行成功: ${stdout}`);
    exec(`npm install --prefix ${filepath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`执行 npm install 时出错: ${error}`);
        return res.status(500).send(`执行 npm install 时出错: ${error.message}`);
      }
      if (stderr) {
        console.error(`执行 npm install 时的错误输出: ${stderr}`);
        return res.status(500).send(`执行 npm install 时的错误输出: ${stderr}`);
      }
      console.log(`npm install 执行成功: ${stdout}`);
      res.send(`部署完成！\nGit Pull 输出: ${stdout}\nNPM Install 输出: ${stdout}`);
    });
  })
})

app.use('/backend', (req, res)=>{
  const filepath = '/var/www/shopping/shopping-backend'
  exec(`git -C ${filepath} pull`, (error, stdout, stderr)=>{
    if (error) {
      console.error(`backend 执行 git pull 时出错: ${error}`);
      return res.status(500).send(`执行 git pull 时出错: ${error.message}`);
    }
    if (stderr) {
      console.error(`backend 执行 git pull 时的错误输出: ${stderr}`);
      return res.status(500).send(`执行 git pull 时的错误输出: ${stderr}`);
    }
    console.log(`backend git pull 执行成功: ${stdout}`);
    exec(`npm install --prefix ${filepath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`执行 npm install 时出错: ${error}`);
        return res.status(500).send(`执行 npm install 时出错: ${error.message}`);
      }
      if (stderr) {
        console.error(`执行 npm install 时的错误输出: ${stderr}`);
        return res.status(500).send(`执行 npm install 时的错误输出: ${stderr}`);
      }
      console.log(`npm install 执行成功: ${stdout}`);
      res.send(`部署完成！\nGit Pull 输出: ${stdout}\nNPM Install 输出: ${stdout}`);
    });
  })
})

app.use('/autoPull', (req, res)=>{
  const filepath = '/var/www/shopping/autoPull'
  exec(`git -C ${filepath} pull`, (error, stdout, stderr)=>{
    if (error) {
      console.error(`autoPull 执行 git pull 时出错: ${error}`);
      return res.status(500).send(`执行 git pull 时出错: ${error.message}`);
    }
    if (stderr) {
      console.error(`autoPull 执行 git pull 时的错误输出: ${stderr}`);
      return res.status(500).send(`执行 git pull 时的错误输出: ${stderr}`);
    }
    console.log(`autoPull git pull 执行成功: ${stdout}`);
    exec(`npm install --prefix ${filepath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`执行 npm install 时出错: ${error}`);
        return res.status(500).send(`执行 npm install 时出错: ${error.message}`);
      }
      if (stderr) {
        console.error(`执行 npm install 时的错误输出: ${stderr}`);
        return res.status(500).send(`执行 npm install 时的错误输出: ${stderr}`);
      }
      console.log(`npm install 执行成功: ${stdout}`);
      res.send(`部署完成！\nGit Pull 输出: ${stdout}\nNPM Install 输出: ${stdout}`);
    });
  })
})

app.listen(port, () => {
  console.log(`autoPull listening on port ${port}`);
});