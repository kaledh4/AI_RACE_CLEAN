const CACHE_NAME = 'genesis-v2'; // Updated cache name to force refresh
const ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
    '/mission_data.json',
    '/favicon.ico'
];

console.log('Service Worker: Script loaded');

// Simple service worker that does nothing to prevent errors
console.log('Service Worker: Disabled mode');

// Just claim clients and skip waiting
self.addEventListener('install', (event) => {
    console.log('Service Worker: Install event (disabled mode)');
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activate event (disabled mode)');
    event.waitUntil(self.clients.claim());
});

// Don't intercept fetch requests
self.addEventListener('fetch', (event) => {
    // Do nothing - let requests go through normally
    console.log('Service Worker: Fetch event (disabled mode)', event.request.url);
});