// 先安装依赖：npm install express
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Node.js Server Running!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});