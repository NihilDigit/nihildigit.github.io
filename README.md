# Digital Odyssey

NihilDigit 的个人博客，基于 [Astro](https://astro.build/) + [astro-paper](https://github.com/satnaing/astro-paper) v5 主题构建，使用 Everforest 配色方案。

**站点地址**：https://nihildigit.dev/

## 项目结构

```
├── .github/workflows/deploy.yml   # GitHub Actions 部署配置
├── public/
│   ├── CNAME                      # 自定义域名
│   ├── favicon.png                # 站点图标
│   └── logo.png                   # 站点 Logo
├── src/
│   ├── assets/icons/              # SVG 图标（社交媒体等）
│   ├── components/                # Astro 组件
│   ├── config.ts                  # 站点全局配置（标题、作者、语言等）
│   ├── constants.ts               # 社交链接、分享链接配置
│   ├── content.config.ts          # 内容集合 Schema 定义
│   ├── data/blog/                 # Markdown 博客文章
│   ├── layouts/                   # 页面布局
│   ├── pages/
│   │   ├── index.astro            # 首页（笔记卡片 + 项目卡片 + 文章列表）
│   │   ├── posts/                 # 文章列表与详情页
│   │   ├── search.astro           # Pagefind 搜索页
│   │   └── archives/              # 归档页
│   └── styles/
│       ├── global.css             # Everforest 主题色定义
│       └── typography.css         # 排版样式
├── astro.config.ts                # Astro 构建配置
├── package.json
└── tsconfig.json
```

## 本地开发

需要 [Bun](https://bun.sh/) 运行时。

```bash
# 安装依赖
bun install

# 启动开发服务器（默认 http://localhost:4321）
bun run dev

# 构建生产版本（含 Pagefind 索引）
bun run build

# 预览构建结果
bun run preview
```

## 部署

通过 GitHub Actions 自动部署到 GitHub Pages。推送到 `master` 分支即触发构建。

**前提**：仓库 Settings → Pages → Source 需设为 **GitHub Actions**（非 "Deploy from a branch"）。

部署流程：`bun install` → `astro build` → `pagefind --site dist` → 上传到 GitHub Pages。

查看部署状态：https://github.com/NihilDigit/nihildigit.github.io/actions

### 自定义域名

`public/CNAME` 文件包含 `nihildigit.dev`，构建时会自动复制到输出目录。如需更改域名，修改此文件并在 GitHub 仓库 Settings → Pages 中同步更新 DNS 配置。

## 写新文章

在 `src/data/blog/` 下新建 Markdown 文件，frontmatter 格式如下：

```markdown
---
title: "文章标题"
description: "文章描述，用于 SEO 和列表展示"
pubDatetime: 2024-02-04T00:00:00Z
tags:
  - tag1
  - tag2
---

正文内容...
```

字段说明：
- `title`（必填）：文章标题
- `description`（必填）：简短描述
- `pubDatetime`（必填）：发布时间，ISO 8601 格式
- `tags`（可选）：标签数组
- `modDatetime`（可选）：最后修改时间
- `draft`（可选）：设为 `true` 则不会在生产环境展示

## 维护指南

### 修改站点配置

- **站点信息**（标题、作者、描述、语言）：`src/config.ts`
- **社交链接**：`src/constants.ts` 中的 `SOCIALS` 数组
- **导航栏**：`src/components/Header.astro`

### 修改首页

首页在 `src/pages/index.astro`，包含四个区块：

1. **Hero** — 标题、兴趣标签、RSS 链接、社交图标
2. **Study Notes** — 学习笔记卡片（Sedgewick / CSAPP）
3. **Projects** — 从 GitHub API 构建时拉取项目信息（`waybar-ai-usage`、`renpak`）
4. **Recent Posts** — 最近 5 篇文章的紧凑列表

如需添加/移除展示的 GitHub 项目，修改首页 frontmatter 中的 `REPOS` 数组：

```ts
const REPOS = ["NihilDigit/waybar-ai-usage", "NihilDigit/renpak"];
```

### 修改主题配色

Everforest 配色定义在 `src/styles/global.css`，修改 CSS 变量即可：

```css
:root, html[data-theme="light"] {
  --background: #fdf6e3;
  --foreground: #5c6a72;
  --accent: #8da101;
  --muted: #e5dfc5;
  --border: #d4cdb4;
}
html[data-theme="dark"] {
  --background: #2d353b;
  --foreground: #d3c6aa;
  --accent: #a7c080;
  --muted: #3d484d;
  --border: #4f585e;
}
```

### 添加社交链接

1. 将 SVG 图标放入 `src/assets/icons/`（命名为 `IconXxx.svg`）
2. 在 `src/constants.ts` 的 `SOCIALS` 数组中添加条目

注意图标样式一致性：模板自带图标（GitHub、Telegram）使用 stroke 风格，Zhihu 和 ORCID 使用 fill 风格。`Socials.astro` 组件不强制统一样式，由各 SVG 自行控制。

### 代码格式化与检查

```bash
bun run format:check   # 检查格式
bun run format          # 自动格式化
bun run lint            # ESLint 检查
```
