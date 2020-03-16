# Ramsey Solutions browserslist-config

## [Browserslist](https://github.com/browserslist/browserslist)

### Installation

```
yarn add dev @ramsey/browserslist-config
```

### Usage
[Configure](https://github.com/browserslist/browserslist#shareable-configs) Browserslist to extend the Ramsey Browserslist config by adding a `.browserslistrc` to the root of your project ([This is the Autoprefixer recommended way](https://github.com/postcss/autoprefixer#browsers)). PostCSS, Autoprefixer, Babel, & Webpack automatically look for the config file. The contents of your config file should look like this:

```yaml
extends @ramsey/browserslist-config
```
