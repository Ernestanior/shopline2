# 图片资源指南

## 📸 推荐的免费高清图库

### ⭐ 最知名、高清且无版权限制

1. **Unsplash** - https://unsplash.com
   - 海量高质量照片
   - 无需署名即可使用
   - 适合社交、海报、视频配图等

2. **Pexels** - https://pexels.com
   - 免费高分辨率图片库
   - 支持搜索多种主题
   - 提供视频素材

3. **Pixabay** - https://pixabay.com
   - 照片、插图、矢量图
   - 免费商用图片
   - 多语言支持

4. **Burst (by Shopify)** - https://burst.shopify.com
   - 由 Shopify 提供
   - 适合电商/设计素材
   - 专注商业场景

5. **Kaboompics** - https://kaboompics.com
   - 风格独特的免费高质量图库
   - 提供调色板功能

### 📷 其他优质免费图库

- **StockSnap** - https://stocksnap.io
- **Picjumbo** - https://picjumbo.com
- **Gratisography** - https://gratisography.com
- **Life of Pix** - https://lifeofpix.com
- **Reshot** - https://reshot.com
- **Foter** - https://foter.com

## 🎯 为 MOLAVA 项目选择图片

### 商品图片要求

1. **尺寸比例**: 2:3 (例如: 800x1200px)
2. **风格**: 简约、时尚、高级感
3. **背景**: 纯色或简洁背景
4. **主题**: 女装、蕾丝、束腰、时尚服饰

### 搜索关键词建议

在图库中搜索以下关键词：

- `fashion woman`
- `elegant dress`
- `lace clothing`
- `corset`
- `lingerie`
- `fashion model`
- `woman portrait`
- `elegant style`

## 📁 图片存放位置

将下载的图片放在以下目录：

```
public/
  images/
    products/
      product-1.jpg
      product-2.jpg
      ...
    hero/
      banner-1.jpg
    categories/
      category-1.jpg
```

## 🔧 图片优化建议

### 1. 压缩图片

使用在线工具压缩图片：
- **TinyPNG** - https://tinypng.com
- **Squoosh** - https://squoosh.app
- **ImageOptim** (Mac) - https://imageoptim.com

### 2. 推荐尺寸

```
商品主图: 800x1200px (2:3)
商品缩略图: 400x600px
横幅图: 1920x600px
分类图: 600x600px
```

### 3. 格式选择

- **JPEG**: 适合照片，文件小
- **PNG**: 适合需要透明背景的图片
- **WebP**: 现代格式，更小的文件大小

## 🚀 快速开始

### 步骤 1: 下载图片

1. 访问 Unsplash 或 Pexels
2. 搜索 "fashion woman" 或 "elegant dress"
3. 下载高分辨率图片（建议 1200px 以上）

### 步骤 2: 重命名和整理

```bash
# 重命名为统一格式
product-1.jpg
product-2.jpg
product-3.jpg
...
```

### 步骤 3: 放入项目

```bash
# 将图片复制到项目目录
cp ~/Downloads/photo.jpg public/images/products/product-1.jpg
```

### 步骤 4: 更新代码

图片会自动显示在商品卡片中，无需修改代码。

## 📝 图片命名规范

```
商品图片: product-{id}.jpg
分类图片: category-{name}.jpg
横幅图片: banner-{id}.jpg
用户头像: avatar-{id}.jpg
```

## ⚠️ 注意事项

1. **版权**: 确保使用的图片允许商业使用
2. **尺寸**: 保持统一的宽高比
3. **质量**: 使用高清图片，但要压缩文件大小
4. **命名**: 使用有意义的文件名
5. **备份**: 保留原始高清图片

## 🎨 配色参考

MOLAVA 项目使用简约黑白配色：

- 主色: #000000 (黑色)
- 背景: #FFFFFF (白色)
- 次要背景: #F5F5F5 (浅灰)
- 文字: #666666 (灰色)

选择图片时，建议选择与这个配色方案协调的图片。

## 📊 图片数量建议

- 首页商品: 20-30 张
- 每个商品详情: 4-6 张不同角度
- 分类图片: 5-10 张
- 横幅图片: 3-5 张

## 🔗 快速链接

- [Unsplash 时尚搜索](https://unsplash.com/s/photos/fashion-woman)
- [Pexels 女装搜索](https://www.pexels.com/search/elegant%20dress/)
- [Pixabay 时尚搜索](https://pixabay.com/images/search/fashion/)

---

**提示**: 下载图片后，记得在项目中测试显示效果，确保图片清晰且加载速度快。
