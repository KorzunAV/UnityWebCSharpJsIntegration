var testString = "JS global value";
var myText = document.getElementById("myText");

function updateFromJs()
{
	var x = document.getElementById("myText").value;
	gameInstance.SendMessage('UIManager', 'UpdateFromJs', x);
}


function updateFromUnity(message)
{
	var x = document.getElementById("myText");
	x.value = message;
}

function SendMessage(gameObject, func, param)
{
    if (param === undefined) {
      if (typeof this.SendMessage_vss != 'function')
        this.SendMessage_vss = Module.cwrap('SendMessage', 'void', ['string', 'string']);
      this.SendMessage_vss(gameObject, func);
    } else if (typeof param === "string") {
      if (typeof this.SendMessage_vsss != 'function')
        this.SendMessage_vsss = Module.cwrap('SendMessageString', 'void', ['string', 'string', 'string']);
      this.SendMessage_vsss(gameObject, func, param);
    } else if (typeof param === "number") {
      if (typeof this.SendMessage_vssn != 'function')
        this.SendMessage_vssn = Module.cwrap('SendMessageFloat', 'void', ['string', 'string', 'number']);
      this.SendMessage_vssn(gameObject, func, param);
    } else
        throw "" + param + " is does not have a type which is supported by SendMessage.";
}