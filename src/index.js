// 先安装依赖：npm install express
const express = require('express');
const multer = require('multer'); // 引入 multer 中间件
const app = express();
const port = 3000;

// 配置 multer，指定文件保存的目录
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // 保存到项目根目录下的 uploads 文件夹
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // 文件名格式：时间戳-原始文件名
  }
});

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
  res.send('Node.js Server Running!');
});

// 添加一个新的路由来处理音频文件的上传
app.post('/upload-audio', upload.single('audio'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No audio file uploaded.');
  }
  res.send(`Audio file ${req.file.originalname} uploaded successfully.`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});