/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["about.html","5525977e4751a502ff0580d22ca42184"],["anli.html","f983f2a7b1f3c7d713c40cc5d5cb55bc"],["by_0.html","b21fb75405ef8b357ca8e088db3a87ae"],["ht_0.html","5716713bf60c1a692a2e6f727a3f618e"],["hy_0.html","a42039cbc0fa03c5aae0448946853c06"],["images/abt.png","a6747891d565ca580fdc46157a422dcc"],["images/banner/1.jpg","6aa1244ffedfc01bdad7ad88f26990aa"],["images/banner/2.jpg","b7c430e12b33cd394d21df723e2a76f6"],["images/banner/3.jpg","b8695481bbd890397df68940851ea9da"],["images/banner/4.jpg","18d1ec2d508fc732d12da6e3074db14b"],["images/banner/5.jpg","cbf227bfcfea59c50877b253cd1eacd7"],["images/banner/6.jpg","c42794e952cc746fcc5f2fd9dccefe7c"],["images/bg1.jpg","25c9f1ea72716f6fe3200f5ec03e8a87"],["images/bg2.jpg","53fafb88d522eac5a496ba342ee156ee"],["images/bg3.png","701cda35d21281570791e7d8c4cbf362"],["images/bt2.png","eb9eb1f852a2d74721dcc44acd132df2"],["images/by/1.jpg","dfba3f6db6dbf8f80a081d8682b89737"],["images/by/2.jpg","9a1b79210bd99cf8c31c9c6a0f497d72"],["images/by/3.jpg","49d7c3393be1aa79f708e8ec2f0cef5b"],["images/by/4.jpg","b7ae32a121f3aefa6ce49ffd6861d20d"],["images/by/5.jpg","1f828de0a66ef49a91580972e9bae437"],["images/by/6.jpg","df2f63a26e3a3952f32cd2f173876ea9"],["images/code.png","e2edbf7e2c2c407a36e42d2dce227b55"],["images/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["images/default-skin.svg","8f650f669dabd04ad78a8228225068c5"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/ht/1.jpg","fada75f6910cdf6f162152258e42acab"],["images/ht/2.jpg","8c8358ca475409e83f3218eed6958977"],["images/ht/3.jpg","a9b5bbce22cdc05288b846b8839a117a"],["images/ht/4.jpg","c58be4482a21c6a0f1efb3045ffa216d"],["images/hy/1.jpg","0ad449ff04c0d57fef9d303ec4ef70e3"],["images/hy/2.jpg","7498a190d0155d9cf909f1343cb24793"],["images/hy/3.jpg","f54a8b1c07d1fa31aace7223cd6123e2"],["images/hy/4.jpg","9b199675d91e63b10e626ba1e34e572f"],["images/jmj/1.jpg","bb98dacde432b875e7c2972a8b4507cc"],["images/jmj/2.jpg","da9c9f6e42e49cfe0b5bd498fb256bb0"],["images/jmj/4.jpg","aa86ab5941e59ce79d943ad728cd19f6"],["images/jw/1.jpg","78f73d3a6ae026598b9c68c495683513"],["images/jw/2.jpg","5409343243c3f7233f576e6a44d95e42"],["images/jw/3.jpg","d954e3c410105133e7531c5e0372844c"],["images/kx/1.jpg","e81c36c29a56be0050671c02121df53b"],["images/kx/2.jpg","ab2aa68f1e3124b8360a6c36f32f25d2"],["images/kx/3.jpg","0a52bded7b43cfd023bafceba4e29d9d"],["images/kx/4.jpg","a9959eeac4725254e91589d7f214220e"],["images/kx/5.jpg","66eff08b3fd845afe2899e4c71efa8e1"],["images/kx/6.jpg","20ac06e364b81cf2080b8468be8e19a0"],["images/kx/7.jpg","dde23d9f43b8a21b255d1888a7649c49"],["images/kx/8.jpg","89cd5ba280b18331140b707dde3486d0"],["images/kx/9.jpg","143799c3e0b34e75960259ce0fa24be2"],["images/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["images/sbhr/1.jpg","6eb7c9846bcd594c0c10073abc61e8d3"],["images/sbhr/2.jpg","4b0199c0a69c54c8508eee192319a036"],["images/sbhr/3.jpg","0aff27451fb489a71b3b8a81d2e0f07f"],["images/sbhr/4.jpg","371f43686ae592bae8fbf770e898b8aa"],["images/sbhr/5.jpg","4e0cc550f297679c8ad93681c2cb2b85"],["images/shj/1.jpg","e701e4fe36d889b64973ff762e383fe4"],["images/sm/1.jpg","a3f8cb3da101209cb0cec36587565ce4"],["images/sm/2.jpg","5f6870258b593aeee74ab388edcaa9eb"],["images/sm/3.jpg","f5646f45b89aa273c43e675c07ffd836"],["images/sm/4.jpg","0ada70565c2f56630110c3e3e8b7c5ff"],["images/sm/5.jpg","0af215eb87f8fce34c5e13f3107a490c"],["images/sm/6.jpg","1f65fed3d755c4895f64f8f259db9027"],["images/sm/7.jpg","305fab83fd2c5dc435beb4af5d8c603a"],["images/sp/aria.conf","56ccf44c099914ed13ccee59fc590a78"],["images/touch/apple-touch-icon.png","a954b38cb51798942488e099d79a86b5"],["images/touch/chrome-touch-icon-192x192.png","c4887f0c8012acd8dd1103c047cd4eb2"],["images/touch/icon-128x128.png","5410e2d7f070c0ccb572a031aa3005d5"],["images/touch/ms-touch-icon-144x144-precomposed.png","0fa13e7d9fe87e404e0ab766a9848c34"],["images/xhmj/1.jpg","17e456a222fe7a1e9449c57826deb1b6"],["images/xhmj/2.jpg","bf08a0fb42762a768719cd53636e41e2"],["images/xhmj/3.jpg","10b424db5b523b36e34938f77d91b513"],["images/xhmj/4.jpg","b9a8fa980a6dd8eb9c9fea304981dd10"],["images/z.png","35b8156f9d016d570e22bbd190019724"],["index.html","4a8eb74c658d179d988d9192b4d06d1e"],["jmj_0.html","c0458cf066fa0e75e5468b542039fff3"],["jw_0.html","4bc2ef1a8a3a7feec5e1e4321680fb61"],["kx_0.html","dd9a6642994ae59b73901fd6c85cf292"],["manifest.json","50480f07c91ae3607fb6903b00170cb6"],["sbhr_0.html","014eb25e252b5c3de95293b356422678"],["scripts/main.min.js","9abb9ee31edf9bb76c864131d1d7d7a4"],["scripts/sw/runtime-caching.js","817b139f9c2fd47aa301dfd2f6b129d9"],["scripts/sw/sw-toolbox.js","e7e54a466864d42dcccc8c3f80a91d1f"],["shj_0.html","0b181e0f1b1e30f299fdaeb5cb0baccf"],["sm_0.html","f12034a96fe2afaeb0349f06eb82d83e"],["sp_0.html","866631a22e75d0eafedf2e48a239fbe3"],["styles/main.css","125f844a792d7fbbda966397a38cc74b"],["styles/reset.css","3b8f6c4a9f1d972945a195827a3c191d"],["styles/style.css","a6c917d695aad7685d5344f7e91d8782"],["styles/variables.css","d3a529eccfd07f2820a42803412ee8e5"],["xhmj_0.html","6e2111bd56574a43230c193f497f2730"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-ymfsj-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




