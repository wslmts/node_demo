const dns = require('dns');
dns.resolve('local.com.ui', (err, addresses, family) => {
    console.log('addresses:', addresses);
});