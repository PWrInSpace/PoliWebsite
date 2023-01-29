import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import sassDts from 'vite-plugin-sass-dts';
import swc from 'unplugin-swc';
import progress from 'vite-plugin-progress';
import localConfig from './vite.local.config';
import checker from 'vite-plugin-checker';
//import i18nextLoader from 'vite-plugin-i18next-loader'

export default defineConfig((params) => ({
    clearScreen: false,
    base: './',
    server: {
        hmr: localConfig.reloadOnChange ? undefined : false,
        proxy: {
            '/api': {
                target: localConfig.apiURL,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
        }
    },
    build: {
        target: ['es2021', 'chrome100', 'safari13'],
        minify: params.mode === 'production' ? 'terser' : 'esbuild',
        sourcemap: params.mode !== 'production',
        outDir: './dist',
        emptyOutDir: true,
        assetsDir: '.',
        rollupOptions: {
            input: {
                index: path.resolve(path.join(__dirname, 'index.html')),
                bundle: path.resolve(path.join(__dirname, 'src', 'main.tsx')),
            },
            output: {
                assetFileNames: asset => asset.name.includes('main') ? '[name].[ext]' : '[name].[hash].[ext]',
                entryFileNames: '[name].js',
                format: 'commonjs',
            },
        }
    },
    css: {
        // preprocessorOptions: {
        //     scss: {
        //       additionalData: `@use "@/styles" as common;`,
        //       importer(...args) {
        //         if (args[0] !== '@/styles') {
        //           return
        //         }
      
        //         return {
        //           file: `${path.resolve(__dirname, './src')}`,
        //         }
        //       },
        //     },
        //   },
        modules: {
            auto: true,
            localsConvention: 'camelCaseOnly',
        }
      },
    plugins: [
        progress(),
        checker({ typescript: true }),
        react({
            fastRefresh: false,
            babel: {
                parserOpts: {
                    plugins: ['decorators-legacy', 'classProperties']
                }
            }
        }),
        sassDts({
            enabledMode: ['development', 'production'],
            // global: {
            //     generate: true,
            //     outFile: path.resolve(__dirname, './src/style.d.ts'),
            //   },
        }),
        //i18nextLoader({ paths: ['./node_modules/foo/locales', './locales'] }), waiting for plugin update
        swc.vite(),
    ]
}));
