
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
    'index.csr.html': {size: 4258, hash: '0ff71f5bfa0d2b74734451be49eabdbec13702025fe4abd875f245afc27bef62', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4535, hash: 'b09ec6e2eebdb7f8a01b76f78d5bb202012e6a73dfdf27361322913b9db184d8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30798, hash: '3429bc9656f32ef6b5c3f56ffd613d3f047a40f778be9ba2f1a1a7858457a99c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4OQMKPCM.css': {size: 111, hash: 'Ud5PpBWlhoM', text: () => import('./assets-chunks/styles-4OQMKPCM_css.mjs').then(m => m.default)}
  },
};
