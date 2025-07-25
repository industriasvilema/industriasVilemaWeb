'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "45065915b25c1056d7a95ff79855795d",
".git/config": "cee5504654b2384179071cc4dbe5a837",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "93dd99c7afd36e992bf6170aa6f3cd19",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3596bb4cd5f55d18f0746011ab89ede0",
".git/logs/refs/heads/main": "c80eb97dc8ee3ea6a2786a0fffaba470",
".git/logs/refs/remotes/origin/main": "06b56bb4fd6706b106aecc805550ccb7",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/0a/1286d9b580d35af1d35307b02fef88cadea24e": "49839927a43edcd11ca47af741efc4b3",
".git/objects/0b/c109ee532a5eba2ec508f10f0e9952941c14b4": "e75ed0c1c26ab149b6ac78494063ee3e",
".git/objects/0c/bca88584fa4b9cc07332a5a73123b58b5e4cae": "5aee247656317adac0bfd1d5a5b1a99f",
".git/objects/0f/3eab963eafce76c7d5182cf1ac71dbb38b6a14": "338723b0ad894a0ad8f3d675a6f61e5b",
".git/objects/11/31307a31dc88efeab8d6d43620a25bfd3e316f": "dedecd666b507a18ec79e30e00176348",
".git/objects/13/ea34db747b1a324b68ea3298fe0afa5e539fab": "bd1ef75aaad46ba8016ed9afb66f3592",
".git/objects/17/d663ed34e8e043f79cde1767372a7c667d7058": "bab52e292bacd61070860a5625f7b628",
".git/objects/19/0a940a2bbf8eebfec25026c9cf7790dbf622c7": "e8d2c3920fbea504695b18476e2eb466",
".git/objects/1a/c5f599391352c442b8b15ee46ba4ff67da6bd1": "4db829759ac3b1e4b4f32b8fc979ca59",
".git/objects/26/1277c5361e29f324a7087a50df7f0f30907586": "2bdff36683361929a6ffa8099219198c",
".git/objects/2d/e8b3f601b689e2c4178b9de0e4f936dbb24d1a": "805c14becd28ea5ace16428bdedfa8d8",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/bd77c76ddbb16ddfbeb820b8c900e684546888": "a6790e8b12107464f7b6f27ac8811504",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/f07c651d1d17e93e9d89ee9dcc96765d5c9b27": "96a149bc86c779442b2c95c7af49b409",
".git/objects/37/21ff64034cda4d0ee4f8c1f941155b602951c8": "b753a9daa68ff81d3db607bf86e65ad3",
".git/objects/37/d89161c0e587ecb1c469820978c07a26bd5441": "1901999a08cf86b6bf0b7f37a2eafc45",
".git/objects/3b/2ad10bda827b9f3f842be8ecd228458a586f66": "f634a633b1d3c979d28d9a181d7d17a9",
".git/objects/3e/bc0caa3e73bb86c90413de8047b083d800a172": "697836f35f2ecb810c17f7eaa97e8b5d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/4b/837761b5f704a1356c3c58639c1cb8d1f01015": "4a17d16872c679e4fe83cd043d7492c0",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/4751a27cf1e7d3110aff3deb427bcd19027a3b": "23c9c0207de73176e28adc0b755eec94",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/2124a354df4b66bcf16bb47c0db88c658411a6": "6a37bff125d48c6e75cd4292018eac28",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5e/b339fe2e4ef01a2b0c986a9bf59302df69090e": "cb28f69e6b19e814ccd85b68bef33a2d",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/aa7179db91055612f04206658d7b56ad6eb8b6": "c0af5f6c2e4355e4ae640b3d24c57e25",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/68/38eb6d8c652fb626cb66f47aecea0ad172f38e": "cd804fa1c67a561f87b936a4e25e3ddd",
".git/objects/69/529f99d24d5f1ca06fbe5316c67605df1ec175": "9431a291bb76c77d69d6665102f4e65c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/c8c498f0a7a2297cad269b757ea139fdb8bb7b": "70e855fd6ed3949fdefffc3190879df4",
".git/objects/6c/17a8629ba118c2cf556de717ab8383d63775f5": "fd3983492fe96dcf0a2dc644f209f674",
".git/objects/72/13376886300c8ee8d65f96096efa9e87a731ca": "49ce849e2aa95c2853978b83a1abf2c1",
".git/objects/73/b8007c345cad2bf1896331514fa0af6953da9f": "a32442467bf2e0e19982087bed45a437",
".git/objects/7c/2332fed4509262617f3b67b54123971da2093a": "6abb968f8a145a40241c7be2952caa9d",
".git/objects/7d/461219aeae9b8d10e9e5865ec4bc92a097d777": "1adc1800ea5ae0e442c6eb8d404e48ac",
".git/objects/85/ae396fb3f03f42ee01ab237d1bc8b5d79fcf5b": "95484b576416addb650be0bbee76796f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d676d6cffc497dcd855c283a06c05f4e2f751b": "20f008c45fb1b7337265a22be11caea4",
".git/objects/8b/0021c5400ca96ba30510a86f5260cdf660a7d4": "c04b72071177ea5a0e739e5829ed82d0",
".git/objects/90/6e853aabc430d7cac5a14413338aa2bbb62739": "1866bd96fae658dec24040775073f29e",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/94/a51bf2c1b2d673865cbf190a7ee0efb3bcf280": "bd3fc2c99a611f5b9bf520c3f31d69d4",
".git/objects/97/d7908b8bf257cceaf30ac1b06b8e185d5d1c15": "b814946fb393979aa66735f7e738d947",
".git/objects/98/76b8e2780c99532c4391ca70a115481eb876f9": "87378d10cda9282bece6e04114904ba2",
".git/objects/99/7d073aff624cdf3633be5a77be50d2d0b4d167": "b1e51b67aae83488a099b5f483039c36",
".git/objects/a5/79a6d216221fc8412512c1d8f740de8d40d506": "5957d76238eb522686dc234fde642a3c",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/6061fbe7d84f248639a5d016f01bef33fd8ba0": "39ff913068a5c9ebe4009566c614b432",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/97cd01553f186e7aefe7c9ce11e97083c292be": "ea1d68841740a490eb635a014e60af04",
".git/objects/ae/81499f646466c5ac8f91060d16566705fc2225": "93550f70c6423883fb472394f4643a56",
".git/objects/af/d26213e7b48dc3ca433c9967a694813bc28b33": "da60b3f288c827d38fc55117240ed4be",
".git/objects/b2/ce6b94e1f035c22f88f08564a51e739e8fad88": "fbf8d18d045601b4ccb84f9d5ca89f7c",
".git/objects/b3/04fde852e1858f8c43031519c8d4dc60b385d4": "8d75e4959380dacc1188a696fdf7ab5f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/35d8e891eeb5d602770f432aa100d5524b9961": "f2918532498db25393b8b6140008a25d",
".git/objects/c0/0a010a1c4c664b65298e4c813560ce797f28e3": "c6935d481b2f7ceca030f649b9cef1a1",
".git/objects/c6/b349739f9adac57f745f59b4c407ac6c29f79e": "93e419826d59bc948786958c51c2def2",
".git/objects/c6/e22bb327459bcd6ee8777e9f09b760f1a2ef2b": "b2361ab62b957d32633e32fa86be9169",
".git/objects/cc/59394f2c23efb1f94f66c446cc664ed3f2e273": "02d643027559983f985e32fde75194d3",
".git/objects/cf/cc39db6fc02349e5635361579230ecbe3638ed": "09494c443513f1290699b0ec291e1a35",
".git/objects/d2/4ede81ff5bb12d773c2359ff638b0ab7551ff2": "c6b4ee5da1336d67a592605d0bab0b48",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dc/508baf399cfbea32f51b9542fe69f91cfae884": "b96c46ed4195adad3b35a2d13f3b26e1",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/df/b85f9eae57cd8c9df9fee2dc2095fadfd261e7": "d8f20ee7c7f22dd7b6b31ce22164479a",
".git/objects/e0/919906364618525016a6718e341bf89bf7231e": "a987ed89b4e572b3541e1e7b223eabf7",
".git/objects/e4/312fd7a13ae9b4ff7405e80a47794024118891": "878315f7a8f073fd7061b895843c2455",
".git/objects/e5/447573434200bb85b6f8597aac398f1d9ae2d0": "3135c6741779a23aa0e922c7cabba2da",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/75003b616f89ae50a67ee2f276df22719489ea": "bb000903490d26e2e7430ed9d6407ce2",
".git/objects/e9/232f08a5685f55a1d7f6da4a62150ae3554745": "2901871d7d745f32682ed80869982b19",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/680fe6c7b6743d6ed154b98ed05c9c37b621a1": "cbb0505f078f32dd86e16ef034fe280c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/f587d5cf485f969fbde186db4388b524785e76": "12fe400a70e7e3fd776644b782484032",
".git/objects/f8/024c5415d2b2075afd7a7b0bc8e2644987c4d3": "1073e4b713d71e50caf1a6883ef46354",
".git/objects/f9/80be17ad1105faafb2954625d3631700f88701": "91f85fe5dce2089d006d7119ab0c96ad",
".git/objects/fe/3b1fd4825556c22d4f2fa2be8e8711f7a1b139": "c0faa82c41fa03d4fe39d82d6937d8df",
".git/refs/heads/main": "56cadc2c4f0eb4983a31a157a3e1d311",
".git/refs/remotes/origin/main": "56cadc2c4f0eb4983a31a157a3e1d311",
"assets/AssetManifest.bin": "15ab5256e79c88f0ed98dd3987f83f35",
"assets/AssetManifest.bin.json": "d4d1084e88b962e008706f0f9667c2de",
"assets/AssetManifest.json": "2c89e0ed87626238634e664acad55221",
"assets/assets/env.txt": "3a794f66acbcf12b73223f4519243a8d",
"assets/assets/images/logo.jpeg": "94bc1d9b96abd2f956f64b4dfd98889a",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "f69d3b862cc6a0ff19a9a943a6a1f85d",
"assets/NOTICES": "341154f60a3a7c4eb1a1aab7e9a35261",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"cors.json": "33170d8cb71b17b5780f39df55d9ad12",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "52abf49e924b1e036470a79f0a587742",
"git.txt": "4201c0e1d7d9710bf30577439e6dedbf",
"google62aa774152929554.html": "082e75c0c5652ccef70bbae6f3a246de",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2f67c34339e7c03bd138ae945e03c60c",
"/": "2f67c34339e7c03bd138ae945e03c60c",
"logo.jpeg": "94bc1d9b96abd2f956f64b4dfd98889a",
"main.dart.js": "19f767f87442610f03f4d98b84353991",
"manifest.json": "fc1f2164eddfa1345311c3c190500850",
"README.md": "226bb67fafed04a8508a6748eebc948f",
"version.json": "e5f951eb6c24cffae51967bfaa0fda01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
