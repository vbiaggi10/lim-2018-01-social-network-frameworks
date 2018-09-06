//Dependencies
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open';

// Webpack Configuration
import webpackConfig from '../../webpack.config.dev';

const port = 3000;
const app = express();
const webpackCompiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(webpackCompiler));
app.use(webpackHotMiddleware(webpackCompiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, err =>{
  if(!err){
    open(`http://localhost:${port}`)
  }
});
