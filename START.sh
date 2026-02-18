#!/bin/bash

echo "🚀 启动 XYN 电商系统"
echo ""
echo "前端地址: http://localhost:3001"
echo "后端地址: http://localhost:8788"
echo ""
echo "正在安装依赖..."

# 安装前端依赖
if [ ! -d "node_modules" ]; then
  echo "📦 安装前端依赖..."
  npm install
fi

# 安装后端依赖
if [ ! -d "workers/node_modules" ]; then
  echo "📦 安装后端依赖..."
  cd workers && npm install && cd ..
fi

echo ""
echo "✅ 依赖安装完成"
echo ""
echo "🔧 启动开发服务器..."
echo ""

# 启动后端 (在后台)
cd workers && npm run dev &
BACKEND_PID=$!

# 等待后端启动
sleep 3

# 启动前端
cd ..
npm run dev

# 清理：当前端停止时，也停止后端
trap "kill $BACKEND_PID" EXIT
