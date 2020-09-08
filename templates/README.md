### 自定义 hollow-react-cli 脚手架

npm install 下载依赖包

npm run start 运行环境

### react 基础库
```
1. react -S
2. react-dom -S
3. antd -S 
```

### webpack 打包工具
```
1. webpack -D
2. webpack-cli -D
3. webpack-dev-server -D
4. html-webpack-plugin -D
5. html-loader -D
```

### 样式 Loader 解析顺序从右向左, 从下向上
```
1. css-loader -D
2. less-loader -D
3. sass-loader -D
4. stylus-loader -D
5. style-loader -D
6. postcss-loader -D
use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
```

### @babel7 编译工具
```
1. @babel/core -D
2. babel-loader -D
3. @babel/preset-env -D
4. @babel/preset-react -D
5. @babel/polyfill -D
6. @babel/plugin-transform-runtime -D
7. @babel/runtime -S
```

### 项目结构
```
├──config
│   ├──webpack.base.js
│   ├──webpack.dev.js
│   └──webpack.prod.js
├──dist [构建自动生成]
│   ├──js/
│   ├──css/
│   └──index.jtml
├──public
│   ├──favicon.ico
│   └──index.html
├──src 
│   └──index.js
├──.babelrc [babel的相关配置]
├──.gitignore [git提交时的忽略文件]
├──package.json [包配置文件]
├──README.md [项目说明文件]
```