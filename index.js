const alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
const base = alphabet.length;

const encode = (number) => {
    let encoded = '';
    while (number) {
        const remainder = number % base;
        number = Math.floor(number / base);
        encoded = alphabet[remainder].toString() + encoded;
    }
    return encoded;
}

const decode = (str) => {
    let decoded = 0;
    while (str) {
        const index = alphabet.indexOf(str[0]);
        const power = str.length - 1;
        decoded += index * (Math.pow(base, power));
        str = str.substring(1);
    }
    return decoded;
}

module.exports = {
    encode: encode,
    decode: decode
}