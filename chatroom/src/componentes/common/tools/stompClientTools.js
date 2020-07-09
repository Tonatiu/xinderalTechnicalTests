import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import * as wsConfig from './webSocketConfig.js';
import Message from '../../../entities/message.js';
//Variable que contendra una instancia de StompClientConnector
let stompClientConnection = null;
/*La clase se encarga de realizar la gestion de las conexiones por websockets usando Stomp y SockJS para acceder al broker, registrar usuarios
enviar y recibir mensajes*/
class StompClientConnector{
    constructor(uname, suscriveURL, serverUrl, topic){
        this.uname = uname;
        this.stompClient = null;
        this.suscriveURL = suscriveURL;
        this.serverUrl = serverUrl;
        this.topic = topic;
        this.connect();
        let randomColor = this.randomBackground();
        this.color = `${randomColor[0]},${randomColor[1]},${randomColor[2]}`;
    }

    onConnect = () =>{
        this.stompClient.subscribe(this.topic, this.onMessageReceived);
        this.stompClient.send(this.suscriveURL,
            {},
            JSON.stringify(new Message(this.uname, null, wsConfig.MESSAGE_TYPES["JOIN"], this.color))
        );
    }

    onError = (error) =>{
        console.log("error al conectarse:" + error);
    }

    onMessageReceived = (payload) =>{
        var message = JSON.parse(payload.body);
        console.log("message", message);
    }

    connect(e) {
        if(e){
            e.preventDefault();
        }
        if(!this.uname) {
            return;
        }
        let socket = new SockJS(this.serverUrl);
        this.stompClient = Stomp.over(socket);
        this.stompClient.connect({}, this.onConnect, this.onError);
    }

    randomBackground(){
        return [Math.floor(Math.random() * 127), Math.floor(Math.random() * 127), Math.floor(Math.random() * 127)];
    }

    send(event, message, sendURL){
        event.preventDefault();
        let msg = message;
        if(msg && this.stompClient) {
            var chatMessage = new Message(this.uname, msg, wsConfig.MESSAGE_TYPES["MESSAGE"], this.color);
            this.stompClient.send(sendURL, {}, JSON.stringify(chatMessage));
        }
    }
}

/**El metodo regresara una instancia de StompClientConnector, lo que genera una conexion stomp para administrar los registros y los mensajes
 * Recibe:
 *   @uname el nomnbre de usuario de la persona que desea conectarse,
 *   @suscriveURL la URL donde se hara la suscripcion,
 *   @serverUrl la url del broker, 
 *   @topic la URL del tema donde se hara la conexion
 * Regresa:
 *  Una instancia de StompClientConnector con una conexion stomp lista para enviar y recibir mensajes
 */
function getStompClient(uname) {
    if(!stompClientConnection){
        stompClientConnection = new StompClientConnector(uname, wsConfig.SUSCRIVE_URL, wsConfig.SEVER_URL, wsConfig.TOPIC_URL);
    }
    return stompClientConnection;
}

export default getStompClient;