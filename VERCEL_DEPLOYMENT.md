# Vercel 部署指南

## ✅ 已完成
- ✅ 代码已推送到 GitHub: https://github.com/Ernestanior/shopline2.git
- ✅ 已创建 vercel.json 配置文件

## 🚀 部署到 Vercel（自动部署设置）

### 方法一：通过 Vercel 网站部署（推荐）

1. **访问 Vercel**
   - 打开 https://vercel.com
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "Add New..." → "Project"
   - 选择 "Import Git Repository"
   - 找到并选择 `Ernestanior/shopline2` 仓库
   - 点击 "Import"

3. **配置项目**
   - Framework Preset: Next.js（自动检测）
   - Root Directory: `./`（默认）
   - Build Command: `npm run build`（自动填充）
   - Output Directory: `.next`（自动填充）
   - Install Command: `npm install`（自动填充）

4. **环境变量设置**
   在 "Environment Variables" 部分添加以下变量：
   ```
   NEXT_PUBLIC_API_URL=https://your-api-url.com
   ```
   （根据你的实际需求添加其他环境变量）

5. **部署**
   - 点击 "Deploy" 按钮
   - 等待构建完成（通常需要 2-5 分钟）
   - 部署成功后会获得一个 `.vercel.app` 域名

### 方法二：使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署项目
vercel

# 部署到生产环境
vercel --prod
```

## 🔄 自动部署设置

部署完成后，Vercel 会自动设置 GitHub 集成：

### 自动部署规则
- ✅ **Push 到 main 分支** → 自动部署到生产环境
- ✅ **Pull Request** → 自动创建预览部署
- ✅ **Push 到其他分支** → 自动创建预览部署

### 验证自动部署
1. 在本地修改代码
2. 提交并推送到 GitHub
   ```bash
   git add .
   git commit -m "Test auto deployment"
   git push
   ```
3. 访问 Vercel Dashboard 查看自动部署进度
4. 部署完成后访问你的网站查看更新

## 📝 环境变量管理

在 Vercel Dashboard 中管理环境变量：
1. 进入项目设置
2. 点击 "Settings" → "Environment Variables"
3. 添加/编辑环境变量
4. 选择应用环境：Production / Preview / Development

## 🌐 自定义域名（可选）

1. 在 Vercel Dashboard 中进入项目
2. 点击 "Settings" → "Domains"
3. 添加你的自定义域名
4. 按照提示配置 DNS 记录

## 📊 监控和日志

- **部署日志**: Vercel Dashboard → Deployments → 选择部署 → Logs
- **运行时日志**: Vercel Dashboard → Deployments → 选择部署 → Functions
- **分析数据**: Vercel Dashboard → Analytics

## 🔧 常见问题

### 构建失败
- 检查 `package.json` 中的依赖是否正确
- 查看构建日志找出错误原因
- 确保本地 `npm run build` 可以成功运行

### 环境变量未生效
- 确保环境变量名称正确（区分大小写）
- 重新部署项目使环境变量生效
- 检查环境变量是否选择了正确的环境

### 自动部署未触发
- 检查 GitHub 仓库的 Webhooks 设置
- 确保 Vercel 有访问仓库的权限
- 在 Vercel Dashboard 中检查 Git 集成状态

## 📚 相关链接

- GitHub 仓库: https://github.com/Ernestanior/shopline2
- Vercel 文档: https://vercel.com/docs
- Next.js 部署文档: https://nextjs.org/docs/deployment

## 🎉 下一步

部署完成后，你可以：
1. 配置自定义域名
2. 设置环境变量
3. 启用 Analytics 分析
4. 配置 CI/CD 工作流
5. 设置团队协作权限
