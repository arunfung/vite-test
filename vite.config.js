// import { defineConfig} from "vite"; 1、可以通过导入方式来增加配置提示

/**  @type import("vite").UserConfig */ // 2、注释的方式增加配置提示
const viteConfig = {
    optimizeDeps: {
        exclude: [], // 将指定的依赖不进行依赖预构建
    }
}

export default viteConfig;