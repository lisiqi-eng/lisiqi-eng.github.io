# 个人学术主页

这是一个无需安装任何框架、可直接部署到 GitHub Pages 的静态个人主页。

## 如何修改个人信息

绝大多数内容只需要修改 [`content.js`](./content.js)。文件内已经按区域写好中英文注释：

- `name`、`initials`：姓名和头像占位字母
- `eyebrow`、`headline`、`intro`：首页主标题和自我介绍
- `links`：Email、GitHub、公开版简历等按钮
- `about`、`facts`：个人简介与基本信息
- `research`：研究方向
- `publications`：论文列表
- `projects`：项目列表
- `news`：近期动态
- `email`、`social`：邮箱与社交链接

每段内容都可以增减。复制一个 `{ ... }` 项即可添加新论文、项目或动态；删除整项即可移除。

## 添加头像

1. 将头像放到 `images` 文件夹，例如 `images/profile.jpg`。
2. 在 `content.js` 中修改：

```js
photo: "images/profile.jpg",
```

如果 `photo` 保持为空，页面会自动显示姓名缩写。

## 添加简历 PDF

1. 请先删除手机号、出生日期、籍贯等不适合公开的信息。
2. 新建 `files` 文件夹并放入公开版简历，例如 `files/cv.pdf`。
3. 在 `content.js` 的 `links` 数组中添加：

```js
{ label: "Download CV", url: "files/cv.pdf" },
```

## 本地预览

最简单的方法是直接双击 `index.html`。也可以在此目录运行：

```powershell
python -m http.server 8000
```

然后访问 <http://localhost:8000>。

## 发布到 GitHub Pages

修改完成后运行：

```powershell
git add .
git commit -m "Update homepage"
git push origin main
```

仓库名是 `lisiqi-eng.github.io`，推送后通常几分钟内即可通过 <https://lisiqi-eng.github.io> 访问。

如果没有自动发布：进入仓库 **Settings → Pages**，将 **Source** 设为 **Deploy from a branch**，分支选择 **main**，目录选择 **/(root)**，然后保存。

## 修改颜色或版式

样式集中在 [`styles.css`](./styles.css)。文件最上方 `:root` 中的 `--ink`、`--paper`、`--blue`、`--coral`、`--green` 是主要配色。
