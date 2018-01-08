// Server side

let io = require('socket.io')(3000)

io.on('connection', socket => {
	console.log('User has connected')
})