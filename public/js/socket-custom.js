let socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('disconnect', () => {
    console.log('Connection refused');
});

socket.emit('sendMessage', {
    user: 'Camilo',
    message: 'Hello World'
}, resp => {
    console.log('Server Response:', resp);
});

socket.on('sendMessage', message => {
    console.log('Server:', message);
});