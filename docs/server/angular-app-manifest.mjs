
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio-template.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio-template.github.io"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4258, hash: 'b0ab185cc2377bf4f5ccf5305914aebbad5810e418311d76c97b100d530415b1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4535, hash: 'f0c60acbe9195f3a68233210f355418b4ac13a32cd26436828a7f034fa883f61', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30841, hash: 'f36d14b27b7c52169a76fc4c6a48f692ac293de826ca41306c17157a79ffee91', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4OQMKPCM.css': {size: 111, hash: 'Ud5PpBWlhoM', text: () => import('./assets-chunks/styles-4OQMKPCM_css.mjs').then(m => m.default)}
  },
};
