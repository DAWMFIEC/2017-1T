#https://github.com/Pithikos/python-websocket-server
import logging
from websocket_server import WebsocketServer

# Called for every client connecting (after handshake)
def cliente_nuevo(client, server):
	print("El cliente con id: %d se ha conectado" % client['id'])
	server.send_message_to_all("El cliente con id: %d se ha conectado" % client['id'])


# Called for every client disconnecting
def salida_cliente(client, server):
	print("Cliente(%d) desconectado" % client['id'])
	server.send_message_to_all("Cliente(%d) desconectado" % client['id'])


# Called when a client sends a message
def mensaje_recibido(client, server, message):
	if len(message) > 200:
		message = message[:200]+'..'
	

	if 'Solicitando' in message:
		print("Servidor: cliente(%d) aceptado!" % (client['id']))
	else:
		server.send_message_to_all("Cliente(%d) dice: %s" % (client['id'], message))


PORT=9001
server = WebsocketServer(PORT, host='127.0.0.1', loglevel=logging.INFO)
server.set_fn_new_client(cliente_nuevo)
server.set_fn_client_left(salida_cliente)
server.set_fn_message_received(mensaje_recibido)
server.run_forever()