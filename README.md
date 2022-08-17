# NPM 插件：图片压缩（浏览器端本地压缩）

## NPM 🔗

[@mxsir/image-tiny](https://www.npmjs.com/package/@mxsir/image-tiny)

## 概述

这是一款图片压缩插件，不依赖网络、服务器，实现的是客户端压缩；

压缩率近似 TinyPng；

支持格式：png、jpg、gif

## 安装

```bash
yarn add @mxsir/image-tiny
```

## 插件导出方法

```javascript
/**
 * @description: 图像压缩
 * @param {File} file 原始 File 文件对象
 * @param {Number} quality 压缩质量，10-90，建议 80
 * @return {Promise<File>} 压缩过的 File 文件对象
 */
imageTiny(file, quality = 80){...}
```

## 使用方法

```javascript
import imageTiny from '@mxsir/image-tiny';

// compressedFile 就是压缩过的图片文件
const compressedFile = imageTiny(file, quality = 80)

```

## ❗️注意

**引入项目特殊配置：**

由于插件里使用了 `wasm` 文件，这个文件不会自动打包到你的项目里，所以要特殊处理一下，你项目的构建工具需要把这个 `wasm` 文件 copy 到你的项目的静态文件目录里。


- vite 或 rollup 可以使用 `rollup-plugin-copy` 这个插件进行静态文件拷贝；

- webpack 可以用 `copy-webpack-plugin` 这个插件进行静态文件拷贝；


这样你的项目打包之后，打包产物里就会有这个 wasm 文件了，插件才可以正常运行。

vite 例子：

vite.config.ts

```javascript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import copy from 'rollup-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    copy({
      targets: [{ src: 'node_modules/@mxsir/image-tiny/dist/pngtiny-custom.wasm', dest: 'public' }],
      verbose: true,
      hook: 'writeBundle',
    }),
  ],
  build: {
    sourcemap: false,
  },
});

```
