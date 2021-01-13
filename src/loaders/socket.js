import io from 'socket.io';

let socket;

async function Sockets(server) {
  socket = await io(server.http);

  socket.on('connect', (client) => {
    console.log('::Nuevo cliente ', client.id);
  });

  return server;
}

const getSocket = () => socket;

export {
  Sockets,
  getSocket,
};
