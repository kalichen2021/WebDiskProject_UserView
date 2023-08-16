import { fileURLToPath, URL } from 'node:url'
import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Inspect from 'vite-plugin-inspect'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// jQuery
import inject from '@rollup/plugin-inject'

// const webpack = require('webpack')
const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    inject({
      $: "jquery",  // 这里会自动载入 node_modules 中的 jquery
      jQuery: "jquery",
      "windows.jQuery": "jquery"
    }),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon',
        })
      ],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
      dts: path.resolve(pathSrc, 'components.d.ts'),
    }),
    Icons({
      autoInstall: true,
    }),
    Inspect(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // esbuild: {
  //   loader: 'jsx', // 或 "jsx"
  //   include: [
  //     // 为 .jsx 和 .tsx 文件添加此行以保持正常行为
  //     'src/**/*.jsx',
  //     'src/**/*.tsx',
  //     'node_modules/**/*.jsx',
  //     'node_modules/**/*.tsx',
  //     // 添加您希望允许使用 JSX 语法的特定文件
  //     'src/LocalJsxInJsComponent.js',
  //     'node_modules/bad-jsx-in-js-component/index.js',
  //     'node_modules/bad-jsx-in-js-component/js/BadJSXinJS.js',
  //     'node_modules/bad-jsx-in-js-component/ts/index.ts',
  //     'node_modules/bad-jsx-in-js-component/ts/BadTSXinTS.ts',
  //     // --- 或 ---
  //     // 添加这些行以允许所有 .js 文件包含 JSX
  //     'src/**/*.js',
  //     'node_modules/**/*.js',
  //     // 添加这些行以允许所有 .ts 文件包含 JSX
  //     'src/**/*.ts',
  //     'node_modules/**/*.ts',
  //   ],
  // },
})
