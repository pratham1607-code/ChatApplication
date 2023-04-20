// node server which will handle socket connection
const io= require('socket.io')(8000)

const user ={};

io.on('conncetion',socket=>{
    socket.on('new-user-joined',name=>{
        user[socket.id]=name;
        socket.broadcast.emit('user-joined',name);

    });

    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message,name:user[socket.id]})
    });

})