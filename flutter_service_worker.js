'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3f04fa85bc1d300f1d6ca602c9385133",
".git/config": "5a6486827fa4fe3e44bf51a108f932e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ccaff89676f849a0fd5f12a8aaed8519",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "5945be83081cdc15d916d751f49120b3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f10b8d9a15654d7270303c3df061fff7",
".git/logs/refs/heads/master": "7fdd4412248e6d2544df4506a8394676",
".git/logs/refs/remotes/origin/HEAD": "99ffade2bf3c2fd6028685daadb082c0",
".git/logs/refs/remotes/origin/master": "c56e10d5525e0c71a76b0e5a5293a409",
".git/objects/13/d9f9fc1bbf7c01a7fd4817a0e069e09533f657": "6e52d182a497fdc44250df3c03391970",
".git/objects/15/344d84d7ca4dacbb962008aaec1ded14bb705a": "383ee805759c02eefd6cc578f9eed7fe",
".git/objects/16/dde0b164c032976f541ac5daf88e1e14842197": "feec7fb62bd1640a56e249f07d46fc86",
".git/objects/17/a456b53427bafb285a1df3a0824957b3321d2c": "e7b365d074e5ce74bffe778ebac6de51",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1a/e95efce4e452e372c06397c3aa20fb3a8335ec": "6eab90336b2e07917381e5e9474b88d4",
".git/objects/1e/8118aca554a2e5d3f77803a45f382a20504883": "8e2536d1b38afe3e07aa888e1503d0cf",
".git/objects/21/6717d4773f177a2d2742e0c3ae2de783c9e2b2": "e970e6e3181d5f657d916395ac25b1ca",
".git/objects/21/937688c22ce5e115d72931750867309f7ad57a": "5df8b3e1a723da5f32c1a87acf79c10e",
".git/objects/22/65c5ca27d16c173811ce7bb9796c39443653ad": "fa627a6ef9e7b223d01c0149f7077415",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/28/779fc0b43f623a51bb438a0b5f258fadc1a7ff": "d39b7a85a6db76a54415a55f3d3d95f2",
".git/objects/29/567102703f3365eff259a13968be4b8c46c1a7": "79e001fb8e793e779f1daa7d04bdc8dd",
".git/objects/37/c8a417f22c5db5a2aa264c071578a57c15b352": "bd20540fd60a20d5637a4170061e89ea",
".git/objects/47/e163d36190ea256da545f45cce4089982ba099": "d27c9b767fe87273f05339589d7368cf",
".git/objects/4c/0dd364f8f33825d2a24ab520ba321ccb269a81": "f37a9291e09fb1cff65c592eac62402d",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4f/a662e149d69287d096b247e0151b341db75744": "6797d0d77741cf5322a1e4c75839ed7c",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/63/aebca328f7a1469be3daff6b1f49fc52e932b7": "04e7dcbf3cf80eff2feb839e1dc010ae",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/72/90e8ddde083d3173b54c311b7f11f9da07bdb6": "500a0bd927e9abbb099260b60d534e4e",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/78/784dfcf442678fb957c96df46ede8a20ccedb5": "3a278c07836fc87b87a84ffc143dbf48",
".git/objects/7c/3f999c463c6c2848b08ce413b417506675747f": "449fb0a23504a804cb268947944e0541",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/8d/ff8a47ec7e96b7a325db44ee9528873e52cfe8": "eaf075c2a1aebcf2c3f6eb45292fe6cc",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/92/07f0e23ef7df60957ffb2f2114d1c322509ade": "ea965adbfeac4ce01ee6de85ac05618f",
".git/objects/92/4d9e8d49b7f7f14c4a789585e965826eb50bc1": "d2f28e6815a40c06546817bd5da54374",
".git/objects/94/17b27b9e5146e310ea5743b4775941472eef4d": "92135a6d308ba1fcd6eec6c97e5a64e9",
".git/objects/95/dd70e3cd94fbab6d83fb42f1f20729e4705d9f": "06173c740f2206d51e737b6b85f9cc0f",
".git/objects/97/72501c20d291a24afcd2bb95e597c422ff72d3": "9d07626990c3d2173ed438e91a435a8c",
".git/objects/97/88c201bf6a1b2befdf9125e6969771c7e655a9": "4ed8a7760561591ad0daa61cc3387b49",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/a9b7d394c36bf9566f9e28e89351675e572094": "d7d63c99c6314abc45752bf96ecb678b",
".git/objects/9e/e1919dc230d3433cce79d137c37081c974034a": "7918dcf5b15c1ac607255918935ca48a",
".git/objects/a1/6192ac42e94bdb6220ecdc53678260634e3a4a": "6c773ad61fc4a378f56f057aa5efce5a",
".git/objects/aa/ebc6d6bf3bdd093dff62ce5c329be9929caa98": "d24a5b29701da236364beac02786b988",
".git/objects/ab/35f70c0b53b02de1a4e9cefb2c298477d680d2": "325ca09ecee76ce809fbe88fedd039a3",
".git/objects/ac/3e210e9e136fc153b53266189c040931f540b0": "9ac932f81071185ae4d83914ed682cd1",
".git/objects/b1/682b5d031d4dd52404f536d11cefe154575f4a": "4d884281bb323b6bec4bacc10124aa19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/0b0faa40b3a54c5d7fe5d7a7223e3d2aaa045c": "3e4602b912f0e2b862f2754c55471179",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/6b8f7a9b74a3fff83c6958e4fe9caa94c19e45": "0575d4df7f2c3e876133615f0388025c",
".git/objects/bd/6c06c3fe6611b14c409b8e000f6200284b05e9": "fbc6b730fc856ffafbcecf33dc47553c",
".git/objects/c4/1e5fe548342544fd42cb40ff41c031852ecf72": "e454e04387a2fdbf9385e63233ddf11b",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cb/806c7a5023f558e6129bcf671517dffa7efa7e": "9a3a92f7823f537f0059355e1aeb8948",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/b46661c839bb1a0c72ade837663f8289d28891": "80165bca3a566a45d618a3d962a71bbd",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/df/5e4c89ae584cd6b362ac4f97a0b3d02f87c1d9": "c9956c5755735a8f56c6b955c8a9fb12",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fd/11cd3205cd866bff5f98a135cc75c0a98b1d38": "1c992fb0da30d6fc10e4a42e5570c9f5",
".git/ORIG_HEAD": "154770bc600c19f49cc394e07d2b4bd2",
".git/REBASE_HEAD": "154770bc600c19f49cc394e07d2b4bd2",
".git/refs/heads/master": "042963a378ce3167b76788a775d3fae3",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "042963a378ce3167b76788a775d3fae3",
"assets/AssetManifest.bin": "373234d664ffe656d0fb4039a86ad513",
"assets/AssetManifest.bin.json": "4446c963dde6091a6b6de4cb1ae02947",
"assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "19837a4181b4d2d07de85adb69a43824",
"assets/NOTICES": "88498483cab9439289348cef666da4be",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "62fe792672186ff4a5f1e05b5a48dc38",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "6a01c518496cc04623cd4ed90d5e05d3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "8b058458762f3ef216bc1d8f828e68d0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6d5cb6f11fdf33c69fe1da7636f0490d",
"/": "6d5cb6f11fdf33c69fe1da7636f0490d",
"main.dart.js": "8c4bae0adb7434d44d1135a1498935b2",
"manifest.json": "808993c97f5b135826e01112e9c31031",
"version.json": "f1951c612b1598c2818a6144f45cc70d"};
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
