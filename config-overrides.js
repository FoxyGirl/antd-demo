const { injectBabelPlugin, getLoader } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')
const AntdScssThemePlugin = require('antd-scss-theme-plugin')

module.exports = function override(config, env) {
  console.log('overriding!')
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], config)

  // add less support to antd
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
  })(config, env)

  config.plugins.push(new AntdScssThemePlugin('./theme.scss'))

  // override the less loader to use the ones from AntdScssThemePlugin
  themify(config, '.less', 'less-loader')

  // override the less loader to use the ones from AntdScssThemePlugin
  themify(config, '.sass', 'sass-loader')

  return config
}

// override a loader with the one from AntdScssThemePlugin
function themify(config, ext, loaderName) {
  const rule = getLoader(config.module.rules, rule => rule.test && rule.test.test(ext))

  const loader = rule && rule.use && rule.use.find(item => item.loader === loaderName)

  if (loader) {
    Object.assign(loader, AntdScssThemePlugin.themify(loader))
  }
}
