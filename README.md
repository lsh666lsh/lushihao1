# 鲁世豪的知识小屋

一个无需登录的静态网站，用于展示离线数仓基础知识。

## 本地预览

直接用浏览器打开 `index.html` 即可。

如果在 IDEA 中运行 `index.html` 时提示 Windows 找不到 `chrome`，说明 IDEA 的浏览器配置指向了不存在的 Chrome 命令。可以在 IDEA 中进入：

```text
Settings -> Tools -> Web Browsers and Preview
```

把浏览器改成 Microsoft Edge，路径可使用：

```text
C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe
```

也可以在项目目录启动一个静态服务：

```bash
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 部署方式

这是纯静态站点，只需要把以下文件上传到任意静态托管平台即可：

- `index.html`
- `styles.css`
- `script.js`
- `CNAME`

可部署到 GitHub Pages、Gitee Pages、Netlify、Vercel、Nginx 静态目录或对象存储静态网站托管。

## 自定义域名

域名：`lushihao.cyou`

如果部署到 GitHub Pages，仓库根目录中的 `CNAME` 文件已经写入该域名。还需要在域名服务商后台配置 DNS：

- 根域名 `lushihao.cyou`：配置 `A` 记录到托管平台提供的 IP，或按平台要求配置。
- `www.lushihao.cyou`：配置 `CNAME` 到托管平台提供的地址。

如果部署到 Vercel、Netlify、对象存储或云服务器，请在对应平台添加 `lushihao.cyou`，再按平台提示设置 DNS 记录。
