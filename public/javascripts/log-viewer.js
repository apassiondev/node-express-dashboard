// Create a WebSocket client connection object
// WebSocket is a browser-support web API
const connection = new WebSocket('ws://localhost:3000')

// Get a reference to the DOM element #log-window
const logWindow = document.querySelector('#log-window')

// Send a message to WebSocket
connection.onopen = function () {
    connection.send('Hello from the client!')
}

connection.onmessage = function (event) {
    logWindow.innerHTML = event.data
}