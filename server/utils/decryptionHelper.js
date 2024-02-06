const {AES} = require('crypto-js');
const CryptoJS = require("crypto-js");


const decryptData = data => {
  try {
    if (typeof data === 'object') {
      return AES.decrypt(JSON.stringify(data), 'secret').toString(CryptoJS.enc.Utf8);
    }
    if (typeof data === 'string') {
      return AES.decrypt(data, 'secret').toString(CryptoJS.enc.Utf8);
    }
  } catch (error) {
    Promise.reject(error)
  }
}

module.exports ={
  decryptData
}