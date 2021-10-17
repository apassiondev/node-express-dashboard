// Create a WebSocket client connection object
// WebSocket is a browser-support web API
const connection = new WebSocket('ws://localhost:3000')

// Get a reference to the DOM element #log-window
const logWindow = document.querySelector('#log-window')

// Get a reference to DOM element #logFilePath
const filePath = document.getElementById('logFilePath').value

// Send a message to WebSocket
connection.onopen = function () {
    if (filePath) connection.send(filePath)
}

connection.onmessage = function (event) {
    const logs = (event.data).split("\n").join('<hr>')
    logWindow.innerHTML = logs
}