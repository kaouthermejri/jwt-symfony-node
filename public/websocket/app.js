// Client side

let users = document.querySelector("#users")

let addUser = (user) => {
	let li = document.createElement('li')
		
	li.innerText = user.username
	li.id = 'user' + user.username

	users.appendChild(li)
}

if (users) {
	
	let socket = io('http://localhost:3000')
	
	socket.on('connect', () => {
		socket.emit('identify', {
			token: users.dataset.token
		})
	})

	socket.on('users.new', ({user}) => addUser(user))

	socket.on('users', ({users}) => {
		for (let u in users) {
			addUser(users[u])
		}
	})

	socket.on('users.leave', ({user}) => {
		users.removeChild(document.querySelector('#user' + user.username))
	})
}