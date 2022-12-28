import { defineConfig } from "vite";
const postcssPresetEnv = require('postcss-preset-env');

export default defineConfig({
    optimizeDeps: {
        exclude: [], // 将指定的依赖不进行依赖预构建
    },
    envPrefix: "ENV_", // 配置vite注入客户端环境变量
    css: { // 进行 css 配置
        modules: { // 对 css 模块化的配置覆盖
            localsConvention: "camelCase", // 配置生成的配置对象的key的展示形式 驼峰、中划线
            scopeBehaviour: "local", // 默认 local 配置模块化行为是全局还是模块化
            generateScopedName: "", // 生成类名的规则
        },
        preprocessorOptions: {
            less: {
                math: "always", // 解析函数
                globalVars: { // 全局变量

                }
            }
        },
        devSourcemap: true, // 开启css source map 索引源文件，方便查找源文件
        postcss: {
            plugins: [
                postcssPresetEnv(/* pluginOptions */)
            ]
        }
    }
})