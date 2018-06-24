const	path = require('path'),
		fs = require('fs')
module.exports = function aks(dispatch) {
try {
hash = require('./code.json')}
catch(e) {}
function saveJson() {
fs.writeFileSync(path.join(__dirname, 'code.json'), JSON.stringify(hash));
}
dispatch.hook('S_REQUEST_SECOND_PASSWORD_AUTH', 1, (event) => {
if(hash === 0) return
dispatch.toServer('C_SECOND_PASSWORD_AUTH', 1, {
hash: hash
})
})
dispatch.hook('C_SECOND_PASSWORD_AUTH', 1, (event) => {
hash = event.hash
saveJson()
})
}