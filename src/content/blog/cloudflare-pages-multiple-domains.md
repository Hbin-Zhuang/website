---
title: "Cloudflare Pages 多域名绑定踩坑记录"
description: "记录在 Cloudflare Pages 多域名配置中遇到的 SSL 证书问题及解决方案"
date: "2025-07-21"
lang: "zh-CN"
category: "tech"
tag: "cloudflare"
tags: ["cloudflare", "ssl", "domain", "troubleshooting", "devops"]
featured: false
---

最近在用 Cloudflare Pages 托管我的静态网站，遇到了一个关于 SSL 证书与域名不匹配的坑。

## 背景

我有两个域名：`hibson.tech`（主域名）和 `z-hb.com`（新域名）。

- 网站源码托管在 GitHub，自动部署到 Cloudflare Pages
- 第一个域名（`hibson.tech`）绑定流程一切顺利，HTTPS 访问正常
- 第二个域名（`z-hb.com`）我图省事，直接在 Cloudflare DNS 里加了个 CNAME，指向 `hibson.tech`，以为能直接复用

## 遇到的问题

访问 `https://z-hb.com` 时，浏览器报错：**522** 。

查了一番后发现是**证书与域名不匹配**的问题，
具体表现为：SSL 证书是签发给 `hibson.tech` 的，而不是 `z-hb.com`，导致浏览器安全校验失败。

## 原因分析

### 1. GitHub Pages/Cloudflare Pages 的证书机制

- 每个自定义域名（如 `hibson.tech`）都会自动申请并绑定一个专属的 SSL 证书
- 这个证书只对绑定的域名有效，不会自动扩展到其他域名（如 `z-hb.com`）

### 2. CNAME 方式的局限

- 在 Cloudflare DNS 里把 `z-hb.com` 的 CNAME 指向了 `hibson.tech`
- 这样做，Cloudflare 只会把流量转发到 `hibson.tech`，但不会为 `z-hb.com` 自动申请 SSL 证书
- **结果**：访问 `z-hb.com` 时，Cloudflare 试图用 `hibson.tech` 的证书响应，导致证书与域名不匹配，浏览器报错

## 解决方案

### 错误做法（❌）

> 直接在 Cloudflare DNS 里给新域名加 CNAME，指向已绑定的旧域名，不会自动获得 SSL 证书。

### 正确做法（✅）

1. 为每个域名单独创建 Cloudflare Pages 项目或在同一个 Pages 项目中分别绑定自定义域名
2. 在 Cloudflare Pages 的"自定义域名"设置里，添加你的新域名（如 `z-hb.com`）
3. Cloudflare 会自动为新域名申请并配置 SSL 证书
4. 在 Cloudflare DNS 里，将新域名的 CNAME 指向新 Pages 项目的默认域名（如 `z-hb.pages.dev`），而不是另一个自定义域名

## 我的实际操作

1. 重新在 Cloudflare Pages 创建了一个新项目（其实用的还是同一份网站源码）
2. 部署成功后，在新项目的"自定义域名"里绑定 `z-hb.com`
3. 在 Cloudflare DNS 里，把 `z-hb.com` 的 CNAME 指向新项目的 `xxx.pages.dev`
4. 访问 `https://z-hb.com`，一切正常，SSL 证书也自动签发并匹配了

## 总结

- **每个自定义域名都要在 Cloudflare Pages 项目里单独绑定**，才能自动获得有效的 SSL 证书
- **不要偷懒直接用 CNAME 指向另一个自定义域名**，否则会遇到证书不匹配问题
- **推荐做法是每个域名都走一遍 Cloudflare Pages 的自定义域名绑定流程**

这个问题本质上是对 SSL 证书机制理解不够深入导致的。希望这篇记录能帮助遇到类似问题的朋友快速解决～

---

<small style="opacity: 0.5; font-size: 0.75rem;">_HBin Zhuang_ 📝</small>
