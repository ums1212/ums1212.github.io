'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ef4bf4ee289177b969b88207b426a627",
"assets/AssetManifest.bin.json": "7f58ea5b045540d02a505c69b3f05f8c",
"assets/assets/images/android_icon.png": "549d0830da4a9dc0e04608256eedb6f9",
"assets/assets/images/catchrun.png": "4af6441dfea8bb5456d974a2723956ba",
"assets/assets/images/cscouter.png": "9c06987771f7a7f3b06f7c68d1b3ffed",
"assets/assets/images/dart_icon.png": "cdc189d734b00c7dc950bda7bf0d0b63",
"assets/assets/images/fav_icon.jpg": "af7cc6f76219ec50ed13171a163d416b",
"assets/assets/images/firebase_icon.png": "f471debbd996e09a70b5ca3b305340c5",
"assets/assets/images/flutter_icon.png": "7fe5e70de98a2dfbc7a8e671c097baf2",
"assets/assets/images/github_icon.png": "bb26e7bcfb1fa416ac26c1e03ed77272",
"assets/assets/images/javascript_icon.png": "d1d9d80a00012cf0601250b6078104da",
"assets/assets/images/java_icon.png": "d895b7834dda35ec3cfb1a0b877bb9c8",
"assets/assets/images/kotlin_icon.png": "d681a34b13982def311e40be54ff7bdc",
"assets/assets/images/livemotion.png": "8549583a661bf08279daaad4f1967fdf",
"assets/assets/images/loading_lottie.gif": "596a1e4ffc40c6c85935050a41d22eaa",
"assets/assets/images/modigm.png": "5e073158fe4aa3b0a05a1885a40f2c24",
"assets/assets/images/mongodb_icon.png": "e5f8c270e4d9b2e626e5d02a83f92430",
"assets/assets/images/moviefriends.png": "670c3c3dbcd29fbfe1c05c1bbfa503df",
"assets/assets/images/mssql_icon.png": "925c9238d19859500738c3ec68055b68",
"assets/assets/images/ms_profile.jpg": "d33fe0c4d39b92417095e41be8d71d92",
"assets/assets/images/ms_profile.png": "b6d2e8a883011e7a92179f950865b799",
"assets/assets/images/myworldcup.png": "c9fbe4a82b7fcc8f7356b8e46f14a7ac",
"assets/assets/images/pdfredactorm.png": "dc95c7f5931644724d9c92c1cc3d6626",
"assets/assets/images/pdf_icon.png": "e9bee346f551041289acfd78e5650257",
"assets/assets/images/playstore.png": "75cd653b0f0612cf95f443ff1e11949b",
"assets/assets/images/profile.jpg": "d040d51768e4f254e77ea7e020823b04",
"assets/assets/images/python_icon.png": "72b1654c58e03fc8da233d2afc82a555",
"assets/assets/images/streamlauncher.png": "6e36412ec14b3625fcb191543f6bb97f",
"assets/assets/images/unipiece.png": "146a2c5c7ea6497ecd8c9ae177136ef6",
"assets/assets/images/velog_icon.png": "0e7731e396be4bc675a48147ac7afb23",
"assets/assets/pdf/modigm.pdf": "d8fffac8620daf32c057cd81a5d9fcca",
"assets/assets/pdf/unipiece.pdf": "5dbe6341c20a2b2840721a87d1772fa8",
"assets/FontManifest.json": "2b52acee7bee9f34d372a965ef37754f",
"assets/fonts/MaterialIcons-Regular.otf": "a930329b52cace7d4cffad1d2065498b",
"assets/NOTICES": "cf266fe038cf34c4ac4cdf36c78630f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "3fba7529c701ab9b85c263b65a58018f",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "3cba3e71914f2739d59163e7171056d2",
"icons/icon-192.png": "fd90b43b3df172315da1c79d63476910",
"icons/icon-512.png": "6d88983c28ff2514a21398457d497e23",
"icons/Icon-maskable-192.png": "fd90b43b3df172315da1c79d63476910",
"icons/Icon-maskable-512.png": "6d88983c28ff2514a21398457d497e23",
"index.html": "4d7e7a58993ced100d58888936fd5cd6",
"/": "4d7e7a58993ced100d58888936fd5cd6",
"main.dart.js": "df25677c0a3eead44a0dd94b7d9f9340",
"manifest.json": "8eb7ff64ff8e849374e42dc7fcb7603f",
"version.json": "65473b2e437b47b95dd2a6bf3bcc5f17"};
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
