module.exports = {
  pages: resolvePages(require('./pages'))
}

function resolvePages (pages = []) {
  return pages.reduce((total, current) => {
    total[current] = resolvePage(current)
    return total
  }, {})
}

function resolvePage (name) {
  return {
    // page 的入口
    entry: `src/pages/${name}/main.js`,
    // 模板来源
    template: `src/pages/${name}/index.html`,
    // 在 dist/index.html 的输出
    filename: `${name}.html`,
    // 当使用 title 选项时，
    // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    title: 'Index Page',
    // 在这个页面中包含的块，默认情况下会包含
    // 提取出来的通用 chunk 和 vendor chunk。
    chunks: ['chunk-vendors', 'chunk-common', name]
  }
}
