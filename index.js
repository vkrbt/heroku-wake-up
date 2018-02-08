const https = require('https');

setInterval(() => {
  https.get('https://cities-server-vkrbt.herokuapp.com/')
}, 1000*60*50);
