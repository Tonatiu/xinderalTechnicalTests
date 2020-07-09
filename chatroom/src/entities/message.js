/**El model del mensaje a ser enviado por el websocket 
 * Recibe: @uname el nombre del usuario que se conecta,
 *  @message el mensaje a enviar,
 *  @type el tipo de mensaje enviado,
 *  @color el color con el que se identificara el usuario
*/
class Message{
    constructor(uname, message, type, color){
        this.uname = uname;
        this.message = message;
        this.type = type;
        this.color = color;
    }
}

export default Message;