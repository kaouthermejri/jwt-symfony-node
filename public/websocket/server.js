// Server side

let io 	= require('socket.io')(3000)
let jwt = require('jsonwebtoken')

let users = [];

io.on('connection', socket => {

	let current_user = null

	socket.on('identify', ({token}) => {
		try {
			let decoded_token = jwt.verify(token, 'my_secret_password', {
				algorithms: ['HS256']
			})
			
			current_user = {
				username: 	decoded_token.username,
				roles: 		decoded_token.roles,
				count: 1
			}

			let user = users.find(u => u.username === current_user.username)
			if (user) {
				user.count++
			} else {
				users.push(current_user)
				socket.broadcast.emit('users.new', {user: current_user})
			}

			socket.emit('users', {users})

		} catch (exception) {
			console.log(exception.message);
		}	
	})

	socket.on('disconnect', () => {
		if (current_user) {

			let user = users.find(u => u.username === current_user.username)
			if (user) {
				user.count--
				if (user.count === 0) {
					users = users.filter(u => u.username !== current_user.username)
					socket.broadcast.emit('users.leave', {user: current_user})
				}
			}
		}
	})
})