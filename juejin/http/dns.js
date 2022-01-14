import dns from 'dns';

dns.lookup('baidu.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});