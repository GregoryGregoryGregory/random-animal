/* eslint-env node */
const request = require("request-promise-native");

exports.dog = function () {
    return new Promise((resolve, reject) => {
        request("https://random.dog/woof").then(JSON.stringify).then(JSON.parse).then(dog => resolve(`https://random.dog/${dog.includes(".mp4") ? "8536-28743-5665.jpg" : dog}`))
        .catch(err => reject(Error(err)));
    });
};

exports.cat = function () {
    return new Promise((resolve, reject) => {
        request("https://random.cat/meow").then(JSON.parse).then(cat => resolve(cat.file))
        .catch(err => reject(Error(err)));
    });
};
