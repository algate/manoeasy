/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6ac1c43dc0a8d868992acea939513230"
  },
  {
    "url": "assets/css/0.styles.be905fd2.css",
    "revision": "f601f472ad1d59de94c5cb476eb08a20"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.da3941ef.js",
    "revision": "c9c5fee5124775b8fc335202a690f948"
  },
  {
    "url": "assets/js/11.b025af38.js",
    "revision": "9a71eebf26f200480477ba78a4fd425b"
  },
  {
    "url": "assets/js/12.dbb059af.js",
    "revision": "f36aed006679f92d045b01f71b6990de"
  },
  {
    "url": "assets/js/13.1a261b87.js",
    "revision": "1164e82f998ce019ef81dcf3c82bc5ab"
  },
  {
    "url": "assets/js/14.5a15bbc3.js",
    "revision": "15d6529487bb7199d5b46c4cb7ac1f5d"
  },
  {
    "url": "assets/js/15.7b5c55db.js",
    "revision": "baa20b7cdd13df5deb71a26a786efa2e"
  },
  {
    "url": "assets/js/16.6df6379b.js",
    "revision": "d46ddefa88ad61d65d0f7e24373d5d28"
  },
  {
    "url": "assets/js/17.516c2569.js",
    "revision": "0663ce1fb26d7201a6c814f793f4e9ac"
  },
  {
    "url": "assets/js/18.f0081dd1.js",
    "revision": "3229bc0fee37c8dde1d893c20568186f"
  },
  {
    "url": "assets/js/19.4e4dad1d.js",
    "revision": "b30dabf3d9ac34498b67263eec0a4a12"
  },
  {
    "url": "assets/js/20.3a3eefbb.js",
    "revision": "10e9999c10671ddeecdb0c016d7208a1"
  },
  {
    "url": "assets/js/21.297dfcc9.js",
    "revision": "018b5e02409c45733df2a1a7e9183cfa"
  },
  {
    "url": "assets/js/22.d6da5142.js",
    "revision": "194a0ef1b00bcc0095efee62afecfc66"
  },
  {
    "url": "assets/js/23.8325e7cd.js",
    "revision": "60fc90eb257c4a3cac2b57127f5dd39c"
  },
  {
    "url": "assets/js/24.563d8cc2.js",
    "revision": "5f7b8bd833502ac601ce0296ebcf4b16"
  },
  {
    "url": "assets/js/25.fc31765f.js",
    "revision": "cfeb90fc96d556e5aadd73ea9ce0eae8"
  },
  {
    "url": "assets/js/26.c8e63e62.js",
    "revision": "58fa4d15b490b44c1fb1cd4bd986f682"
  },
  {
    "url": "assets/js/27.cb0519da.js",
    "revision": "5559837b9d7a314d543735b671a0be4e"
  },
  {
    "url": "assets/js/28.f313e7c8.js",
    "revision": "55dcec5b7a8640b83e109a60b6bafbca"
  },
  {
    "url": "assets/js/29.8201baa8.js",
    "revision": "55c574623cb57051fc75c3f08ece79d3"
  },
  {
    "url": "assets/js/30.702cf160.js",
    "revision": "1b3459f8f29a003d3a3238256ba62613"
  },
  {
    "url": "assets/js/31.2c8a92f6.js",
    "revision": "00ad4aadf4b98e949013eab1efaff25d"
  },
  {
    "url": "assets/js/32.a2d85e43.js",
    "revision": "6e41292e5cba42fd4cd91eee3b6382ed"
  },
  {
    "url": "assets/js/33.4ab3b2bb.js",
    "revision": "eb9656ee3c0e0f527427ed1774fb6403"
  },
  {
    "url": "assets/js/34.ca38b0d3.js",
    "revision": "6d86da743c03d913e344173ea8d02c26"
  },
  {
    "url": "assets/js/35.7de7630a.js",
    "revision": "7585c5f36aba44f39a7a19930ffd168b"
  },
  {
    "url": "assets/js/36.0d78269f.js",
    "revision": "b9afec3aa10daec0e741b0dc73fb5ce3"
  },
  {
    "url": "assets/js/37.45d789f0.js",
    "revision": "425c3ab1bf8c168bcc86fb7228229b2f"
  },
  {
    "url": "assets/js/38.796c3cfd.js",
    "revision": "fafa991992fbdedaebf46dcb8af8efcb"
  },
  {
    "url": "assets/js/4.127e46f3.js",
    "revision": "ea8c1083f26cbb4d8adb8d6a9929003c"
  },
  {
    "url": "assets/js/5.49171081.js",
    "revision": "671c37bf2a084fcdc54be1566c04deb6"
  },
  {
    "url": "assets/js/6.bf63a2b7.js",
    "revision": "7d24ccb5004a3a568dadce26295ee356"
  },
  {
    "url": "assets/js/7.a765d265.js",
    "revision": "d17f8978864869729f5f81ae73e1a9ab"
  },
  {
    "url": "assets/js/8.c83e8202.js",
    "revision": "7b86806fd4f87af2aa949515b06dd839"
  },
  {
    "url": "assets/js/9.a0094280.js",
    "revision": "80fd37d3e0ef1e4587a2c6614ea15f73"
  },
  {
    "url": "assets/js/app.af965ea1.js",
    "revision": "60cee0c14d0da9384f78885902968217"
  },
  {
    "url": "assets/js/vendors~flowchart.782f637e.js",
    "revision": "959ec4fd8257341fe8849e5f6b5fbcdc"
  },
  {
    "url": "assets/js/vendors~notification.947e9dbe.js",
    "revision": "09d7e42644470d08ceaf0daf51d0f299"
  },
  {
    "url": "components/index.html",
    "revision": "6eacab1e573fd951a6060b14fd901434"
  },
  {
    "url": "components/theme-default-plugin.html",
    "revision": "e7cfda1534a32a3e055f8ee5bd1a1cb4"
  },
  {
    "url": "components/vuepress-plugin-comment.html",
    "revision": "a296a0d2f1e4c7f7f0f7ea1fce6b5fe4"
  },
  {
    "url": "components/vuepress-plugin-element-ui.html",
    "revision": "df5248ac7087a8524f7851cd5854a8a4"
  },
  {
    "url": "components/vuepress-plugin-flowchart.html",
    "revision": "3d09f4af0de5bd6a6eaddc83db4bbd3f"
  },
  {
    "url": "components/vuepress-plugin-social-share.html",
    "revision": "63c3d64ec1d3a102f39ce3c210cee13a"
  },
  {
    "url": "components/vuepress-plugin-yuque.html",
    "revision": "5d51201d360de497b30fb9787634f0fb"
  },
  {
    "url": "github/index.html",
    "revision": "a94954dc30a51b8adc8a5707bd7bba9e"
  },
  {
    "url": "guide/assets.html",
    "revision": "c866eac5302bd8aee7d179fe0b17b08d"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "0485ff409d111d57a355642327c79c30"
  },
  {
    "url": "guide/deploy.html",
    "revision": "e82dada1a2884f9629f4411871f63e8e"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "b591cf2d587a3dc21b6dbae973cdd9f9"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "ce044c23ddad5dd73e44a051fee29451"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8018543eb1605cd8265d4757b47ce45c"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "141d32820c71a1b5d6a62e12a875ff0b"
  },
  {
    "url": "guide/i18n.html",
    "revision": "8d546727b80df17f71d926ded6375a21"
  },
  {
    "url": "guide/index.html",
    "revision": "f8142703675cea6f2efbd68476f7a984"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "b59359d68106af2877f1d1b69c867090"
  },
  {
    "url": "guide/markdown.html",
    "revision": "d0e884efa19cd6ce3d0fca92fd45101c"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "072d24397c626de7a7ade03d34b5a46c"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "9c45efdb2c941b470f58f29bba397144"
  },
  {
    "url": "images/logo.png",
    "revision": "c13c985102d2b8da58db0b62c980dfff"
  },
  {
    "url": "images/vue.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "index.html",
    "revision": "69818a349d9a0615d70f27f112f9726c"
  },
  {
    "url": "issue/index.html",
    "revision": "60ebfee92490d955a862db3813b12e48"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
