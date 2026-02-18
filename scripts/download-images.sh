#!/bin/bash

# 图片下载脚本
# 使用方法: ./scripts/download-images.sh

echo "📸 MOLAVA 图片下载助手"
echo ""
echo "请按照以下步骤操作："
echo ""
echo "1. 访问以下图库网站："
echo "   - Unsplash: https://unsplash.com/s/photos/fashion-woman"
echo "   - Pexels: https://www.pexels.com/search/elegant%20dress/"
echo ""
echo "2. 搜索关键词："
echo "   - fashion woman"
echo "   - elegant dress"
echo "   - lace clothing"
echo "   - corset"
echo ""
echo "3. 下载至少 20 张高清图片"
echo ""
echo "4. 将图片重命名为："
echo "   product-1.jpg, product-2.jpg, ..."
echo ""
echo "5. 将图片复制到项目目录："
echo "   public/images/products/"
echo ""
echo "---"
echo ""
echo "创建图片目录..."

# 创建必要的目录
mkdir -p public/images/products
mkdir -p public/images/hero
mkdir -p public/images/categories

echo "✅ 目录创建完成"
echo ""
echo "📁 图片存放位置："
echo "   - 商品图片: public/images/products/"
echo "   - 横幅图片: public/images/hero/"
echo "   - 分类图片: public/images/categories/"
echo ""
echo "💡 提示: 图片比例建议为 2:3 (例如: 800x1200px)"
echo ""
