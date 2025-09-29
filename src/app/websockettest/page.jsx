'use client';

export default function WebSocketTest() {
  const connectToSocket = () => {
    // Connect to specific WebSocket path
    const socket = new WebSocket(`ws://${window.location.host}/ws/chat`);
    
    socket.addEventListener('open', (event) => {
      console.log('Connected to WebSocket server');
    });

    socket.addEventListener('message', (event) => {
      console.log('Message from server:', event.data);
    });

    // Add error handling
    socket.addEventListener('error', (error) => {
      console.error('WebSocket error:', error);
    });

    socket.addEventListener('close', () => {
      console.log('Disconnected from server');
    });
  };

  return (
    <div>
      <h1>WebSocket Test</h1>
      <button onClick={connectToSocket}>
        Connect to WebSocket
      </button>
    </div>
  );
}
