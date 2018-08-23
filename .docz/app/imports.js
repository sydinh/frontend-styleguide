export const imports = {
  'src/components/Nav/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-nav-index" */ 'src/components/Nav/index.mdx'),
}
