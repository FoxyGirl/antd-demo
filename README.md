# antd-demo
Demo of AntDesign

### branch *rewired*

Customizing of theme by using rewired, customize-cra, import on demand & less-loader
https://ant.design/docs/react/use-with-create-react-app

This way doesn't allow to see color changing with hotreload. 
____

### branch *antd-scss-theme-plugin-rewired*

**antd-scss-theme-plugin**

https://www.npmjs.com/package/antd-scss-theme-plugin#step-1-configure-ant-design-to-use-less-stylesheets

This way allows to use Sass variables for rewritnig css, but it doesn't allow to import them form antd.
https://github.com/intoli/antd-scss-theme-plugin/issues/41

AntdScssThemePlugin is actually a Webpack plugin, so using it with injectBabelPlugin shouldn't work.

It needs to test the way suggested by Attila Hajdrik
https://medium.com/@attilah/creact-react-app-typescript-less-antd-theming-4499763961ab

and the way suggested by intoli
https://intoli.com/blog/antd-scss-theme-plugin/
https://github.com/intoli/antd-scss-theme-plugin#step-1-configure-ant-design-to-use-less-stylesheets

___
