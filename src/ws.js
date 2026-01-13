let socket = null;

export function connectWS(url, onMessage) {
  socket = new WebSocket(url);
  socket.onmessage = (e) => onMessage(JSON.parse(e.data));
}

export function sendWS(data) {
  if (socket && socket.readyState === 1) {
    socket.send(JSON.stringify(data));
  }
}