# mean_project
mean

引入editor.md后css文件有错误
css文件中在引入font文件时有一个...的路径导致编译不通过，这里建议先找到node_module/editormd/css/editormd.css文件中找到...改为..即可！

# modify by below:

## Welcome to the mean stack

The mean stack is intended to provide a simple and fun starting point for cloud native fullstack javascript applications.   
MEAN is a set of Open Source components that together, provide an end-to-end framework for building dynamic web applications; starting from the top (code running in the browser) to the bottom (database). The stack is made up of:

- **M**ongoDB : Document database – used by your back-end application to store its data as JSON (JavaScript Object Notation) documents
- **E**xpress (sometimes referred to as Express.js): Back-end web application framework running on top of Node.js
- **A**ngular (formerly Angular.js): Front-end web app framework; runs your JavaScript code in the user's browser, allowing your application UI to be dynamic
- **N**ode.js : JavaScript runtime environment – lets you implement your application back-end in JavaScript

### Pre-requisites
* git - [Installation guide](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/) .  
* node.js - [Download page](https://nodejs.org/en/download/) .  
* npm - comes with node or download yarn - [Download page](https://yarnpkg.com/lang/en/docs/install) .  
* mongodb - [Download page](https://www.mongodb.com/download-center/community) .  

### Installation 
``` 
git clone https://github.com/linnovate/mean
cd mean
cp .env.example .env
npm install
npm start (for development)
```
### Docker based 
``` 
git clone https://github.com/linnovate/mean
cd mean
cp .env.example .env
docker-compose up -d
```
### Credits 
- The MEAN name was coined by Valeri Karpov.
- Initial concept and development was done by Amos Haviv and sponsered by Linnovate.
- Inspired by the great work of Madhusudhan Srinivasa.


###添加nodejs监控模块
```
npm install express-status-monitor
```
通过/status检测node指标

###同时监控前端和后端的更改刷新
concurrently


###本项目启用了pm2进行全局的监控，请先全局安装pm2及pm2-web
```
npm install -g pm2
npm install -g pm2-web
pm2-web
```