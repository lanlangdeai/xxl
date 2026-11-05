# XXL — 星夏之恋

> 一款基于 Vue 3 的移动端 H5 社区应用，用于记录与分享故事、收藏回忆、互动交流。项目名取自页面标题 `XXL`（星夏之恋）。

## 项目简介

XXL 是一个面向移动端的轻社交 / 记忆记录类应用，主体为 Vue 3 + vue-router 的单页应用（SPA），UI 基于 Vant 组件库，构建工具采用 Vite，移动端适配采用 `vw` 单位 + rem 基准的响应式方案，适配移动端 H5 以及 App 内嵌 WebView 场景。

核心场景围绕「故事」展开：用户可以登录/注册、发布与浏览故事、收藏内容、与他人互动（评论、回复、访客、粉丝、关注），并管理个人资料与账户。

## 功能特性

### 账户与登录
- 启动页（Start）：用户登录 / 忘记密码 / 新用户注册入口
- 登录（Login）：用户名 + 密码登录，支持「记住密码」
- 注册（Register）：用户名 + 短信验证码 + 密码确认
- 忘记密码（Forget）
- 修改密码（ChangePwd）
- 退出登录（My 页面）

### 首页
- 故事信息流（Homepage）：以列表形式展示用户发布的故事（作者、时间、标题、正文）
- 顶部搜索框：按喜好搜索故事（占位实现）
- Logo 点击刷新

### 故事与互动
- 故事详情（StoryDetails）：查看故事正文与配图，底部发表评论（弹出输入框）
- 我的故事（Story）：个人发布的故事列表
- 发布 / 添加回忆（Add）：底部导航入口
- 我的消息（Message）：评论 / 回复消息列表，支持回复互动

### 收藏
- 我的收藏（Collect）：收藏列表，按日期分组展示
- 收藏详情（CollectDetails）

### 个人中心（My）
- 个人资料（ChangeInfo）：头像、性别、昵称、手机号、邮箱、签名
- 修改昵称（ChangeName）、修改手机号（ChangePhone）、修改邮箱（ChangeMail）、修改签名（Signature）
- 社交数据：访客（Visitor）、粉丝（Fans）、关注（Focus）
- 我的消息、我的收藏、我的故事、修改密码、退出登录

### 底部导航
- 首页 / 添加回忆 / 收藏 / 我的，四项 Tab 切换

## 技术栈

| 分类 | 技术 |
| ---- | ---- |
| 框架 | Vue 3.5（组合式 API） |
| 路由 | vue-router 4 |
| UI 组件库 | Vant 4 |
| 构建工具 | Vite 5 |
| 样式 | Sass、vw 单位 + rem 基准响应式布局 |
| 移动适配 | postcss-px-to-viewport-8-plugin |
| 图标 | Iconfont（阿里矢量图标库） |

## 目录结构

```
XingXiaZhiLian/
├── dist/                  # 构建产物
├── static/                # 静态资源
├── src/
│   ├── assets/            # 图片资源
│   ├── components/        # 页面组件
│   │   ├── category/      # 访客 / 粉丝 / 关注
│   │   └── information/   # 个人信息编辑（昵称/手机/邮箱/签名）
│   ├── css/               # 全局样式
│   ├── modules/           # 公共模块（Footer 底部导航）
│   ├── router/            # 路由配置
│   ├── App.vue            # 根组件
│   └── main.js            # 入口文件
├── index.html             # HTML 模板
├── vite.config.js         # Vite 配置（含移动端适配）
└── package.json
```

## 路由一览

| 路径 | 页面 |
| ---- | ---- |
| `/`、`/Start` | 启动页 |
| `/Login` | 登录 |
| `/Register` | 注册 |
| `/Forget` | 忘记密码 |
| `/Homepage` | 首页 |
| `/Story`、`/StoryDetails` | 我的故事 / 故事详情 |
| `/Add` | 添加回忆 |
| `/Collect`、`/CollectDetails` | 我的收藏 / 收藏详情 |
| `/Message` | 我的消息 |
| `/My` | 个人中心 |
| `/ChangeInfo`、`/ChangeName`、`/ChangePhone`、`/ChangeMail`、`/Signature` | 个人资料相关 |
| `/ChangePwd` | 修改密码 |
| `/Visitor`、`/Fans`、`/Focus` | 访客 / 粉丝 / 关注 |

## 构建与运行

```bash
# 安装依赖
npm install

# 本地开发（热更新，默认 http://localhost:8082）
npm run dev

# 生产构建（压缩产物到 dist/）
npm run build

# 本地预览构建产物
npm run preview
```

## 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0

## 移动端适配说明

本项目采用「双轨适配」方案，适配 750px 设计稿：

1. **px → vw 自动换算**：通过 `postcss-px-to-viewport-8-plugin` 将 CSS 中的 `px` 单位自动转换为 `vw`（设计稿宽度 750px）。
2. **rem 基准**：全局设置 `html { font-size: 13.333333vw }`，使 `1rem = 100px`（750 设计稿下），历史代码中的 `rem` 单位无需改动即可随视口等比缩放。

> 由于项目源码中同时存在 `px` 和 `rem` 两种单位，两种方案并行以保证历史 `rem` 布局在新方案下依然正常显示。

## 升级说明

本项目已从 **Vue 2 + Webpack 2 + Mint UI** 全面升级为 **Vue 3 + Vite 5 + Vant 4**：

- Vue 2 选项式 API → Vue 3 组合式 API（`<script setup>`）
- `vue-router` 2 → 4（`createRouter` / `createWebHashHistory`）
- Mint UI → Vant（`MessageBox` → `showConfirmDialog`、`mt-popup` → `van-popup`、`mt-actionsheet` → `van-action-sheet` 等）
- Webpack 2 → Vite 5（构建速度显著提升）
- 移动端适配：手写 rem 动态计算脚本 → vw 自动换算方案
- 移除 MUI 运行时依赖（返回键处理、`plus.runtime.quit` 等 App 内嵌能力不再内置）

## 说明

- 当前项目为前端原型 / 演示版本，页面数据多为本地 Mock 数据，尚未接入后端接口。
