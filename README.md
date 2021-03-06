### 三勾点餐系统、支持多端发布，一套代码发布到8个平台，面向开发，方便二次开发

**项目介绍**

基于thinkphp6+element-ui+uniapp打造的面向开发的小程序商城，方便二次开发或直接使用，可发布到多端，包括微信小程序、微信公众号、QQ小程序、支付宝小程序、字节跳动小程序、百度小程序、android端、ios端。

*
**软件架构**

后端：thinkphp6 管理端页面：element-ui 小程序端：uniapp。

部署环境建议：Linux + Nginx + PHP7.1-7.3 + MySQL5.6，上手建议直接用宝塔集成环境。

**安装教程、开发文档、操作手册请进入官网查询**

[官网链接](http://www.jjjshop.net)

[安装文档](https://www.kancloud.cn/wxw850227/jjjshop-food/2471711)

**bug反馈**

如果你发现了bug，请发送邮件到 bug@jiujiujia.net，我们将及时修复并更新。

**特别鸣谢**

- thinkphp:[https://www.thinkphp.cn](https://www.thinkphp.cn)
- element-ui:[https://element.eleme.cn](https://element.eleme.cn)
- vue:[https://cn.vuejs.org/](https://cn.vuejs.org/)
- easywechat:[https://www.easywechat.com/](https://www.easywechat.com/)
- 参考UI：https://gitee.com/tinypuppet/nxdc-milktea

## 常见错误

- 1、提示缺少python2的环境变量，则先安装python2.7并设置好python环境变量后再执行npm install.
- 2、如果提示node-saas包问题，则执行npm install node-sass --save，如果提示要4.12.0版本的，则执行npm install node-sass@4.12.0 --save。
- node-sass 4.13.0
- sass-loader 7.3.1
- //卸载掉
- npm uninstall sass-loader node-sass
- //执行
- npm install sass-loader@对应版本号 sass@1.26.5  --save-dev
- npm install sass-loader@7.3.1 sass@1.26.5  --save-dev
- 若是还不行就在吧 node-sass和sass-loader删除
- 执行安装sass@1.26.5应该好了
- npm install sass@1.26.5  --save-dev


## 目录结构-分析

#### 命令生成目录结构表

1. 开始 -> 运行 -> cmd -> 进入DOS命令行界面；
2. 进入需要生成目录结构的项目主目录；
3. 输入命令行 tree /f > list.txt （其中list.txt是最终生成目录结构的文件名，可以自定义）；
4. 在项目目录下，便会生成一个list.txt文件
