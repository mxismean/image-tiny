# NPM 插件：图片压缩

## 概述

这是一款图片压缩插件，不依赖网络、服务器，实现的是客户端压缩；

压缩率近似 TinyPng；

支持格式：png、jpg、gif

## 安装

```bash
yarn add @mxsir/image-tiny
```

## 使用方法

```javascript
import imageTiny from '@mxsir/image-tiny';

/**
 * @description: 图像压缩
 * @param {File} file 原始 File 文件对象
 * @param {Number} quality 压缩质量，10-90，建议 80
 * @return {Promise<File>} 压缩过的 File 文件对象
 */
imageTiny(file, quality = 80) {}

```