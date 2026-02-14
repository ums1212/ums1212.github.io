'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5b921db0c005bb396d9befb94ef54295",
"assets/AssetManifest.bin.json": "cdee7b426382be0b0bfbc98d449f41d6",
"assets/AssetManifest.json": "0bc496e076e307f2ec463c083471bf3c",
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
"assets/assets/images/unipiece.png": "146a2c5c7ea6497ecd8c9ae177136ef6",
"assets/assets/images/velog_icon.png": "0e7731e396be4bc675a48147ac7afb23",
"assets/assets/pdf/modigm.pdf": "d8fffac8620daf32c057cd81a5d9fcca",
"assets/assets/pdf/unipiece.pdf": "5dbe6341c20a2b2840721a87d1772fa8",
"assets/FontManifest.json": "866b9b20ab0e8c30ffe220d2a2d66abe",
"assets/fonts/MaterialIcons-Regular.otf": "65d8b126eebb15d77a3e618d056a1256",
"assets/NOTICES": "108d5857d5a54ea7013250ccd6d4c840",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "3fba7529c701ab9b85c263b65a58018f",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "a677b828041ede1207adba6b2db793b3",
"icons/icon-192.png": "fd90b43b3df172315da1c79d63476910",
"icons/icon-512.png": "6d88983c28ff2514a21398457d497e23",
"icons/Icon-maskable-192.png": "fd90b43b3df172315da1c79d63476910",
"icons/Icon-maskable-512.png": "6d88983c28ff2514a21398457d497e23",
"index.html": "27acb65c7be2126d232b7f3c536f327a",
"/": "27acb65c7be2126d232b7f3c536f327a",
"main.dart.js": "0d74b5da106483dd52cab625df1bc9e1",
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
