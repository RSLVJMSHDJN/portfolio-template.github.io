
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
    'index.csr.html': {size: 4258, hash: '67c1025f82dcec8b0138ebca342f6bd979f97d9d8eeeff3b54672fbd92750083', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4535, hash: 'a4daf6fcbabe7c3efcc2a7ff6500f065a11a8af58d5345c94b8f80fb0a6b3a75', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30889, hash: '8693ac06c7387469c5adfee0ad596f80594a7d2f69f1947ac53a08f258af2faf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4OQMKPCM.css': {size: 111, hash: 'Ud5PpBWlhoM', text: () => import('./assets-chunks/styles-4OQMKPCM_css.mjs').then(m => m.default)}
  },
};
