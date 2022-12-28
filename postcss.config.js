// 插槽，less 是预处理，postcss 是后处理，但 postcss 可以通过插件来做css的一系列处理
const postcssPresetEnv = require('postcss-preset-env');
module.exports = {
    plugins: [
        postcssPresetEnv(/* pluginOptions */)
    ]
}