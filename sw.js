/*
*   ServiceWorker
*   @
*/

self.addEventListener('install', (event) => {
    console.log('Instalando o Service Worker', event)
    event.waitUntil(
        caches.open('static')
            .then((cache) => {
                console.log('Pré carregamento dos arquivos do app')
                cache.add('/etagas')
                cache.add('/etagas/index.html')
                cache.add('/etagas/style.css')
                cache.add('/etagas/app.js')
                cache.add('/etagas/img/flex.png')
                cache.add('/etagas/img/calcflex.png')
                cache.add('/etagas/img/gasolina.png')
                cache.add('/etagas/img/etanol.png')
        })
    )
})

self.addEventListener('activate', (event) => {
    console.log('Ativando o Service Worker', event)
    return self.clients.claim()
})

self.addEventListener('fetch', (event) => {
    //console.log('Buscando algo', event)
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response
                } else {
                    return fetch(event.request)
                }
            })
    )
})