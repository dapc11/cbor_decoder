const cbor = require('borc');
const base64url = require('base64url');

function printHex(buffer) {
    console.log(buffer.toString('hex').match(/../g).join(' '));
}

const args = process.argv;
let mtb = base64url.toBuffer(args[2]);
console.log("decoded base64url input:");
printHex(mtb);
let decoded = cbor.decodeFirst(mtb);
console.log("p:");
printHex(decoded['p']);
decoded = cbor.decode(decoded['p']);
decoded = cbor.decode(decoded[1]);
console.log("human readable:\n" + JSON.stringify(decoded, null, 2));
