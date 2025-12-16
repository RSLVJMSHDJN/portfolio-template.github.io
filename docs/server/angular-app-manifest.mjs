
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
    'index.csr.html': {size: 4258, hash: '12bc260b4e613b5c3559aaa46a1bf2adb9c8b2a32ac4f5954dbaba342d0c162a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4535, hash: '4b0e934714dc0dd3906a4e75a927072b4677b4d50a58a9527df49766355d438f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30745, hash: '5010181c71e8d2801597a6300b7dd32dfff79cf350722fc7c9af7fca59af12a9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4OQMKPCM.css': {size: 111, hash: 'Ud5PpBWlhoM', text: () => import('./assets-chunks/styles-4OQMKPCM_css.mjs').then(m => m.default)}
  },
};
