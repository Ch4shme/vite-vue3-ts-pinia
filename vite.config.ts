import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      dts: path.resolve(__dirname, 'src/types/auto-imports.d.ts')
    })
  ],
  server: {
    port: 8080, //启动端口
    hmr: {
      host: 'localhost',
      port: 8080
    },
    // 设置代理
    proxy: {
      '/api': {
        target: 'your https address',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }
});
