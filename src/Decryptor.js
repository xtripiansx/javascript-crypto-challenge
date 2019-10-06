const nacl = require('libsodium-wrappers')
let k;

//if you have the key decrypt the text else say that you have no key
module.exports.decrypt = async function decrypt(ciphertext, nonce) {

    if (k != null) { return nacl.crypto_secretbox_open_easy(ciphertext, nonce, k) };
    throw 'no key';

}

//get the key 
module.exports.setKey = async function setKey(key) {
    k = key;
}