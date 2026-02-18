# 🖼️ 图片设置指南

## 快速开始

### 方法 1: 自动化脚本（推荐）

```bash
# 运行图片下载助手
./scripts/download-images.sh
```

### 方法 2: 手动下载

#### 步骤 1: 访问图库网站

选择以下任一图库：

1. **Unsplash** (推荐)
   - 访问: https://unsplash.com
   - 搜索: "fashion woman" 或 "elegant dress"
   - 下载高分辨率图片

2. **Pexels**
   - 访问: https://pexels.com
   - 搜索: "lace clothing" 或 "corset"
   - 下载免费图片

3. **Pixabay**
   - 访问: https://pixabay.com
   - 搜索: "fashion model"
   - 下载免费商用图片

#### 步骤 2: 下载图片

- 至少下载 20 张商品图片
- 建议下载 1200px 以上的高清图片
- 选择简约、时尚风格的图片

#### 步骤 3: 重命名图片

将下载的图片重命名为：

```
product-1.jpg
product-2.jpg
product-3.jpg
...
product-20.jpg
```

#### 步骤 4: 放入项目

将图片复制到项目目录：

```bash
# 方式 1: 使用命令行
cp ~/Downloads/product-*.jpg public/images/products/

# 方式 2: 手动拖拽
# 将图片拖拽到 public/images/products/ 文件夹
```

#### 步骤 5: 验证

刷新浏览器，图片应该自动显示在商品卡片中。

## 📊 图片规格要求

### 商品图片
- **尺寸**: 800x1200px (2:3 比例)
- **格式**: JPG 或 PNG
- **大小**: < 200KB (建议压缩)
- **数量**: 至少 20 张

### 图片优化

使用以下工具压缩图片：

1. **在线工具**
   - TinyPNG: https://tinypng.com
   - Squoosh: https://squoosh.app

2. **命令行工具**
   ```bash
   # 使用 ImageMagick 批量压缩
   mogrify -resize 800x1200 -quality 85 public/images/products/*.jpg
   ```

## 🎨 图片风格建议

### 推荐风格
- ✅ 简约、干净的背景
- ✅ 自然光线
- ✅ 专业摄影
- ✅ 高清晰度
- ✅ 统一色调

### 避免
- ❌ 过度修图
- ❌ 杂乱背景
- ❌ 低分辨率
- ❌ 水印
- ❌ 不协调的色彩

## 🔍 搜索关键词

在图库中使用以下关键词搜索：

**英文关键词**:
- `fashion woman`
- `elegant dress`
- `lace clothing`
- `corset`
- `lingerie fashion`
- `woman portrait elegant`
- `fashion model studio`

**中文关键词** (如果图库支持):
- `时尚女装`
- `优雅连衣裙`
- `蕾丝服装`
- `束腰`

## 📁 目录结构

```
public/
  images/
    products/          # 商品图片 (必需)
      product-1.jpg
      product-2.jpg
      ...
    hero/             # 横幅图片 (可选)
      banner-1.jpg
    categories/       # 分类图片 (可选)
      category-1.jpg
```

## ✅ 检查清单

完成以下步骤后，图片就设置好了：

- [ ] 下载至少 20 张高清图片
- [ ] 重命名为 product-1.jpg 到 product-20.jpg
- [ ] 复制到 public/images/products/ 目录
- [ ] 压缩图片大小（可选但推荐）
- [ ] 刷新浏览器验证显示

## 🚀 完成后

图片设置完成后，你的网站将显示真实的商品图片，而不是占位符。

访问 http://localhost:3001 查看效果！

## 💡 提示

1. **批量下载**: 可以一次性下载多张图片，然后批量重命名
2. **保持备份**: 保留原始高清图片作为备份
3. **定期更新**: 定期更新商品图片以保持新鲜感
4. **测试加载**: 确保图片加载速度快，用户体验好

## 📞 需要帮助？

如果遇到问题，请查看：
- `IMAGE_GUIDE.md` - 详细的图片资源指南
- `public/images/README.md` - 图片目录说明

---

**注意**: 确保使用的图片允许商业使用，并遵守相应的许可协议。
