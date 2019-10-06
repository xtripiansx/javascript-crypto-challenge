const libsodium = require('libsodium-wrappers');
let keypair;

//generate keypair (public and secret key)
(async () => {
    await libsodium.ready;
    keypair = libsodium.crypto_sign_keypair();
})();

//use private key or secret key to append a signature to message
module.exports.sign = async function sign(msg) {
    await libsodium.ready;
    return libsodium.crypto_sign(msg, keypair.privateKey);
}

//get public key to verify that the signature appended to a
//message was actually issued by the creator of the public key.
module.exports.verifyingKey = async function verifyingKey() {
    await libsodium.ready;
    return keypair.publicKey;
}
