#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

// Unsplash API - 使用公开的图片 URL
const imageUrls = [
  // 女装/时尚相关的高质量图片
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1200&fit=crop',
  'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&h=1200&fit=crop',
  'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&h=1200&fit=crop',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1200&fit=crop',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1200&fit=crop',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1200&fit=crop',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=1200&fit=crop',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1200&fit=crop',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=1200&fit=crop',
  'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&h=1200&fit=crop',
  'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1200&fit=crop',
  'https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=800&h=1200&fit=crop',
  'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&h=1200&fit=crop',
  'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800&h=1200&fit=crop',
  'https://images.unsplash.com/photo-1494955464529-790512c65305?w=800&h=1200&fit=crop',
  'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=1200&fit=crop',
  'https://images.unsplash.com/photo-1484327973588-c31f829103fe?w=800&h=1200&fit=crop',
  'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&h=1200&fit=crop',
  'https://images.unsplash.com/photo-1558769132-cb1aea1c8e77?w=800&h=1200&fit=crop',
  'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&h=1200&fit=crop',
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${path.basename(filepath)}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

const downloadAll = async () => {
  console.log('开始下载商品图片...\n');
  
  const outputDir = path.join(__dirname, '../public/images/products');
  
  // 确保目录存在
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (let i = 0; i < imageUrls.length; i++) {
    const url = imageUrls[i];
    const filename = `product-${i + 1}.jpg`;
    const filepath = path.join(outputDir, filename);
    
    try {
      await downloadImage(url, filepath);
      // 添加延迟避免请求过快
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`✗ Failed to download ${filename}:`, error.message);
    }
  }
  
  console.log('\n图片下载完成！');
  console.log(`总共下载: ${imageUrls.length} 张图片`);
  console.log(`保存位置: ${outputDir}`);
};

downloadAll().catch(console.error);
