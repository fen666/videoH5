# wacomchina

> 访问地址：<http://www.wacomchina.cn>
通过Gulp构建工具结合NodeJS快速开发前端静态页。

## 开发
### package.json文件
（1）新建
```
npm init
```
（2）Gulp插件安装：
```
"browser-sync": "^2.18.13",
"gulp": "^3.9.1",
"gulp-htmlmin": "^3.0.0",
"gulp-imagemin": "^3.4.0",
"gulp-less": "^3.3.2",
"gulp-minify-css": "^1.2.4",
"gulp-uglify": "^3.0.0"
```

### .gitignore文件
```
node_modules
.idea
*.log
*.zip
dist/
```
### Gulpfile.js任务
* 开发模式``gulp default``：less文件编译css，浏览器同步。
* 生产模式``gulp build``：设置输入输出文件，压缩html、css、images、js并输出文件到dist构建目录下。

### 项目开发
开始啦！

---

### 项目运行
```
// 开发模式
npm run dev 或者 gulp (gulp default)
// 生产模式
npm run build 或者 gulp build
```

