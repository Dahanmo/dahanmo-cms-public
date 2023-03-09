'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a8853be77260071b063e54bfeb40de5a",
"index.html": "eacc09b53185752ec5b6d4711cf83ef1",
"/": "eacc09b53185752ec5b6d4711cf83ef1",
"main.dart.js": "07e758c7d1ebc27c164b6243bd3143b6",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"manifest.json": "59a85dd0526d763ec163dbdbc2a31ca1",
".git/config": "7c53a72866bd768413a0880740fe8775",
".git/objects/61/d837c5807f49a80dee518a37f1fcd89fa86161": "7e37e8060ad6181236e3420a498f7a5c",
".git/objects/95/4c48052aee1b89ab19ca94a8840a07a5034abe": "3629d265d77c6a2b0f8dfe9db9424179",
".git/objects/3e/8f81f74bc35446e880b65da97c47aba085be65": "3307b5a3284ef2cac9aae30be0bf38f8",
".git/objects/50/d9b8963ba0ac5bfd26abae8754e5547af4aea4": "4b4ebad2563778657b72b078501fc4d1",
".git/objects/68/3e672d6bc044966207d0da5dde75c008d395ab": "4ed352e654dd4ee61838332b238ed1e9",
".git/objects/32/334f93e6d88485fafef53c96e695838531d5bf": "f119ada139ceebd090f7fe7981608f95",
".git/objects/35/edddcb416971d776996d497d6a2d922aecf1c4": "10d6696570fae865244752cc64eca0cd",
".git/objects/35/41412f1302b7a6403c7d12f1ac33d7006ef906": "516611542cfcdaa87fde49f157908944",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/0b/f0f009996c9552a955c2952c0a021edda1081f": "20ced8364875a950d5a7727eb9eeda9c",
".git/objects/33/ad73f27eed0bf6b41822ebde7312bcb3ec4161": "f5dd7841462ae7fe0d6513d5510fea52",
".git/objects/02/7a4e103a1045353d9df5f55aac8ce6c4bb921b": "d21cf4b1a71fa04bc245a346e5f6ec22",
".git/objects/02/1aee5f3c56d38d39fe37f66a7530897bfaf55c": "107614f0b57378bf5bffabd806ad967a",
".git/objects/b5/8b0d16285c9c01dcb3ec460b9b9b57414ea531": "fa078fb9900f67be1f8fbb2e906a888e",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/a5/809fd09fa2a8ee02248c8ed76e432b27a5b05c": "3ade8e6e7f7f025ca71def4d8ce30005",
".git/objects/f4/a5c1010cbca7824e8575de73f7580f27662926": "3972b3a156fb184b4184a319927d60d5",
".git/objects/f3/d93b82fd72c46c8510b2dc0d66ad896745c9e6": "ecdd9c89b41c4d205f70d8ef3391ec7d",
".git/objects/c0/68c71e86f5c80a8540e79018ffbfb582065160": "f78c85cff4e6f8b725ad263126027a48",
".git/objects/ee/fc6d529bb702c33edd0982e63fbaa54c428a6a": "f5db909f5b92bcd28f627537b30738b9",
".git/objects/e3/f3bfb00a4ef7d313e4a3e06197d91f065dd645": "da707215a3c396689dae31d2b149906e",
".git/objects/cf/c0eadbba2c04b6725f9bbb275246d55de93b62": "70593129c31ba751d5ef09a495801065",
".git/objects/e4/8ff09275db862b4f0906dc16501c7e32ed2041": "b658eafe7758be71f111d70f5187ee6e",
".git/objects/ec/2135b9fab6dbe6db13fe23b4a7097122a189e7": "539829b08086c48666d30957915a3f14",
".git/objects/20/16abfcaacf1823acd65c81ceaec38d35cf9bd1": "da050f1dfb6bd7b61fe617b5013cff2d",
".git/objects/4b/1bb0bac4cdb191cf1f743fd497636c1e746ff9": "0427e9f0712b5fa22afef8de641dae9f",
".git/objects/4b/af64b9b35666f21793723dc11b6d915af611d7": "07ca3ba7cabfb6ae990998ec1dd2d905",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/29/183479dfccc60b07d2e0bde46bd9d0531e209d": "16fc10a5a63539e36c0f44d2aba927d8",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/16/f82b9683c1bbcd73ecfbb3396fed6e6d709251": "dd3d24e54145c6f8c18a5c0e26d79896",
".git/objects/73/10ee1502daff982bf4fe89c8dd82e0777f3975": "5ffd0489f5feef607c6512b637b4c595",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8f/3baf1452dc210caadbdf4798c0e5b82a072d8e": "0af7ff30a1c8beb01edde50c53174445",
".git/objects/7e/f4923043cff89b46c13484e41cad536c7ff4bc": "e21e73e3f3b8c7bf4f2922ec3cd54d6c",
".git/objects/4c/eabe0e8cc75d231cb44537b6eca22533eb503d": "f4895649b1a2ece187ba7ed38a81837d",
".git/objects/81/f8fba5e5e65e0c23663e1610152f79ff34c174": "667f3cf3b7fce94e57a17219669d66bd",
".git/objects/72/deaf53dfef4929edae3dd55d45de0810744336": "5e5aa966e85406814c079b13368552a4",
".git/objects/72/3add074f7fa511b3bca74421d994b2cd46fdac": "b75749606416e1da74ccda829fab0db2",
".git/objects/9f/c2a622c29a3e77c7e4e48f621ea4796b158b12": "efe7712751ea10e0d4211fd20f9f7c65",
".git/objects/6b/010bb438ff1efdf0fc9c71054d890e81b5778a": "8ad82d981a05f2ceecc104423c8d975c",
".git/objects/07/9fa0396b2cabfe0ff9f1467f368a6cefa9fd77": "c80ccb9573fb2e196a0a080e53ad4767",
".git/objects/6e/268d3ed1c08194869f39706fcd10bf4268127d": "bc2119031136da9f3cb19b9a05db52c0",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/31/5026a8ed7dcf9e5071bb557b7634a1bf5fec62": "0610de95fd2e2db7b2cd87294c2726af",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/30/8aa46411ce8820d1ccd557cc1549da4a17e058": "76f71fce475562663d1839692aaeb903",
".git/objects/5b/71128e13033b9e6c30c21735793c258809b93b": "d82a056c5df1b545529162450ad69c85",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/1a4c52125d7c9c724487ba108f7c32593bcfdb": "1c1d8428d01455fae40d6fcff0678550",
".git/objects/90/d3951936d2c6e24c0e76f86e3d5f48271fc614": "eca8c3dd464d8306ad41a0f7ceb362df",
".git/objects/90/aeb55d735036abb16b4a66161cbcb6a186233e": "1a79f039ee68e11239aae1377a8b214b",
".git/objects/d3/cdde0d1b849395f2461e9e05affa2d6d973c26": "86caa679292b41e13af227ea5c40847a",
".git/objects/d3/ad9103e152b9dda459ca2a02ea874b5f03a6df": "67f748f6d74d5bb2f82e7e65730091c1",
".git/objects/a0/01a526a7c720c22c8661a3e83624e7c8c7ef61": "394174d4653b3c535fb64d2aa84d8eab",
".git/objects/dd/59efdcc69ec18213800dd79b5ee2e2709e8109": "a62e5bacc3081a44abcf4fdffc1c985b",
".git/objects/dd/0883d806b7c88983a324529094c25dfb52bcbc": "b18737b6e93f995739ff1a63051babe6",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/b8262cda4603c4d44b4e681d8d31d42655b856": "eec535bdf010260e4f72a97b7a806dc0",
".git/objects/b9/eab57511465329c8a87cdfe4ac2cbc06e60063": "7a9322e6f0323741a43be02ff8caf8c8",
".git/objects/a1/56d813c8a397d7ed06840bdb78b0814c5195cf": "0962b9188afe4ba188daff8ea5dca344",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f0/d8dee440df6805d4de7e6f8f548aad1dd6bc6e": "10ac68730828551e4fc11ac945d349ec",
".git/objects/c2/43d905e14eaf608aac0c85688045fff000b847": "056491a2226d0a8abfcba0f742e3ad74",
".git/objects/f6/793e174d0be4c0abb9753ea99ff9776aca08d0": "e2f8014aa2a38b221c366f70c772d46d",
".git/objects/cb/0efd3e18732d8726cf83af4bb32a70af09af3d": "eae1b13fe0b06fc335dcefcb6e76383e",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/2c/fcf49123992288cefd0771ae7f1a37c953c4a7": "b321de4c2d5f64416f21d027ffbfc997",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/84/67b2a021ec3e445e436a9714d252a8d4cfd50a": "f73f8927b12801ccbce3ad4261b40272",
".git/objects/4f/243c480eefdd4561b072df85ccca16337c12a1": "dc4f9b976f458b36fe8e240a58ed4e39",
".git/objects/12/e8d5d84250e3d7aa500a2ea8fd33e7e101c1a4": "f0eceeb7810bb6e907e6dff7d228828b",
".git/objects/85/b0f09ef12ec43710b14b7d20f51964f0202100": "4fa0554737e974b26ebc8d2276e74e6d",
".git/objects/1d/0658d6e73fd2f537b266231b6f1f2ec6962874": "35f5bbe079167fc0580d26e178769346",
".git/objects/1c/a25ec643f20690dfa4fb53ade5de320a5c439a": "dbeabe130d3d528f8526da91ab12300b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/47/ab0e94ff116bc124ad5ed810404030fce9140f": "efdfa2fcd4a830f8cc38c4b5deef752c",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "56675267b40f53a818345bc440c52bb6",
".git/logs/refs/heads/main": "56675267b40f53a818345bc440c52bb6",
".git/logs/refs/remotes/origin/main": "a747bb1644d709bb5a51929c4f18f890",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "bdede83abce3012870add3aed591d171",
".git/refs/remotes/origin/main": "bdede83abce3012870add3aed591d171",
".git/index": "612f94bb788d4e7d6543ec126e84829e",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"assets/AssetManifest.json": "c970db84fe67cea7409c33f2603b7826",
"assets/NOTICES": "8a35fab190325f80d7a365b40f082bc3",
"assets/FontManifest.json": "e2f126e136ff8be123b9c7260c25ac7d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutterfire_ui/assets/countries.json": "8c937aac9f3b69162be779fbcd6199d2",
"assets/packages/flutterfire_ui/assets/icons/facebook.svg": "5fad3daafe7c7c5163fca56662d2738a",
"assets/packages/flutterfire_ui/assets/icons/google.svg": "3b5ceaea5e2391782d39df225a375d5d",
"assets/packages/flutterfire_ui/assets/icons/apple_light.svg": "2508cc7c5d302fd37edff1b87fedb594",
"assets/packages/flutterfire_ui/assets/icons/twitter.svg": "6086e2aad26effea1344c8e118520e32",
"assets/packages/flutterfire_ui/assets/icons/apple_dark.svg": "1b587ffd7d75c462847f8137a93f3161",
"assets/packages/flutterfire_ui/assets/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/shaders/ink_sparkle.frag": "1a5ee49e1d29be33f9c53569030131c5",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icons/thunder.png": "36249e15cbeab768a62adea0a5055443",
"assets/assets/icons/caret-down.png": "3a5fd5dc9c972d5eaa363bda592afe25",
"assets/assets/icons/profile.png": "1ae434a8dd33b4af551cc116c6a4caa5",
"assets/assets/icons/chat.png": "dc5ad7f23dd7e810cea24488d9024624",
"assets/assets/fonts/Pretendard-Medium.ttf": "be5dedc52c0403d321e8202ae6aac2b3",
"assets/assets/fonts/Pretendard-Black.ttf": "eb51bbd6cd9010dc92357f8303784b17",
"assets/assets/fonts/Pretendard-Regular.ttf": "65e9a69de2d10a9e43102d5c5eae368b",
"assets/assets/fonts/Pretendard-Thin.ttf": "86fdcc882292e5db7d6bef1c68aceba6",
"assets/assets/fonts/Pretendard-ExtraLight.ttf": "6ff96cb10994cadd3bf7bdc30cd31aa1",
"assets/assets/fonts/Pretendard-SemiBold.ttf": "bc96c6e0e53f8f953912e93a1e50b8f7",
"assets/assets/fonts/Pretendard-ExtraBold.ttf": "a75966342357de44f5a09d07b0ae535a",
"assets/assets/fonts/Pretendard-Bold.ttf": "dc5a0e145559879abb18d5969da0df6b",
"assets/assets/fonts/Pretendard-Light.ttf": "3a2c8b53f02202d322fa86eb9672ba30",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
