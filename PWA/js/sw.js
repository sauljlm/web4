let urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/css/styles.css',
  '/js/script.js',
  '/img/hello.png'
]

self.addEventListener('install', function (event) {
  //Perform install steps
  event.waitUntil(
    caches.open('iss-pwa-base-v1')
      .then(function (cache) {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response
      }
      return fetch(event.request)
    }).catch(function (error) {
      console.log('Error fetching data from network')
      console.log(error)
      return new Response('Not Found', {status: 404})
    })
  )
})
