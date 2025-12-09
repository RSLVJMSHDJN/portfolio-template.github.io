
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio-template/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio-template"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4248, hash: '20cd005f1b7f5cb81c30285836cb4e783dedd03ef351ac6b7021c3f239ef14c3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4525, hash: 'dc7e60efb16f465516a4a2559eaff529a28f31c818ea90075b5385e54e3d76d6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22996, hash: 'f821e44d40cafc4e1ca844207e44a9789d5ae5c8077cd851b916945f2adaa542', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4OQMKPCM.css': {size: 111, hash: 'Ud5PpBWlhoM', text: () => import('./assets-chunks/styles-4OQMKPCM_css.mjs').then(m => m.default)}
  },
};
