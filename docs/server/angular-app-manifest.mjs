
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
    'index.csr.html': {size: 4258, hash: 'eb9812c5cebbec9ee575ef71e4bc20f1e8d2a4346a7be6b14ad5f8c3150b9f08', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4535, hash: 'b8fd7f1161ab1b981575cdc2f6620e8402008e2ca78f1d8293d092f2e835b1f6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30681, hash: '9cf189dd106314333400bedefa1deeca0fe1e6a1cc5176d1749d27a0cf883017', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4OQMKPCM.css': {size: 111, hash: 'Ud5PpBWlhoM', text: () => import('./assets-chunks/styles-4OQMKPCM_css.mjs').then(m => m.default)}
  },
};
