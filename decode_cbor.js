const cbor = require('borc');
const base64url = require('base64url');

const args = process.argv;
let mtb = base64url.toBuffer(args[2]);
let decoded = cbor.decodeFirst(mtb);
decoded = cbor.decode(decoded['p'][1]);
console.log(JSON.stringify(decoded, null, 2));
