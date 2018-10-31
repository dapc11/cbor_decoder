const cbor = require('borc');
const base64url = require('base64url');

function printHex(buffer) {
    return buffer.toString('hex').match(/../g).join(' ');
}

const args = process.argv;
let mtb = base64url.toBuffer(args[2]);
console.log("decoded base64url encoded input:\n" + printHex(mtb));
let decoded = cbor.decodeFirst(mtb);

try {
	console.log("p:\n" + printHex(decoded['p']));
	decoded = cbor.decode(decoded['p']);
} catch (ignored) {}

let headers = cbor.decode(decoded[0]);
let payload = cbor.decode(decoded[1]);
let signature = decoded[2];

console.log("headers:\n" + JSON.stringify(headers, null, 2));
console.log("payload:\n" + JSON.stringify(payload, null, 2));
console.log("signature:\n" + printHex(signature));
