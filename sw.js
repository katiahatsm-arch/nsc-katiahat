// ন্যূনতম service worker: শুধু "Install / Add to Home screen" চালু করার জন্য। কিছু cache করে না,
// তাই অ্যাপ আপডেট করলে সবসময় নতুন সংস্করণ আসে।
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
