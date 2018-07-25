// makes an object of the form {userNew: 'userNew'}
const messageTypes = [
    "userNew"
].reduce((accum, msg) => {
  accum[ msg ] = msg
  return accum
}, {})

const url = "//onuw-server.localhost:8000";

module.exports{ messageTypes, url };