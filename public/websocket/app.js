// Client side

let users = document.querySelector("#users")

if (users) {
	let socket = io('http://localhost:3000')
	socket.on('connect', () => {
		console.log('I am connected')
	})
}