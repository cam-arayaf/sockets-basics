const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Connected user');

    client.emit('sendMessage', {
        user: 'Admin',
        message: 'Welcome to app'
    });

    client.on('disconnect', () => {
        console.log('Disconnected user');
    });

    client.on('sendMessage', (data, callback) => {
        console.log(data);
        //callback(message.user ? { resp: 'Everything is fine' } : { resp: 'Everything is wrong' });
        client.broadcast.emit('sendMessage', data);
    });
});