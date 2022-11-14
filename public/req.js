const req = {}

req.send=(action,body,method="GET",responce)=>{
const xhttp = new XMLHttpRequest();
xhttp.onload = () => responce(this.responseText);
xhttp.open(method, action);
xhttp.send(body);
}

req.get=(action,body)=>{
const xhttp = new XMLHttpRequest();
xhttp.onload = () => this.responseText;
xhttp.open("GET", action);
xhttp.send(body);
}

req.head=(action,body)=>{
const xhttp = new XMLHttpRequest();
xhttp.onload = () => this.responseText;
xhttp.open("HEAD", action);
xhttp.send(body);
}

req.post=(action,body)=>{
const xhttp = new XMLHttpRequest();
xhttp.onload = () => this.responseText;
xhttp.open("POST", action);
xhttp.send(body);
}

req.put=(action,body)=>{
const xhttp = new XMLHttpRequest();
xhttp.onload = () => this.responseText;
xhttp.open("PUT", action);
xhttp.send(body);
}

req.delete=(action,body)=>{
const xhttp = new XMLHttpRequest();
xhttp.onload = () => this.responseText;
xhttp.open("DELETE", action);
xhttp.send(body);
}

req.connect=(action,body)=>{
const xhttp = new XMLHttpRequest();
xhttp.onload = () => this.responseText;
xhttp.open("CONNECT", action);
xhttp.send(body);
}

req.options=(action,body)=>{
const xhttp = new XMLHttpRequest();
xhttp.onload = () => this.responseText;
xhttp.open("OPTIONS", action);
xhttp.send(body);
}

req.trace=(action,body)=>{
const xhttp = new XMLHttpRequest();
xhttp.onload = () => this.responseText;
xhttp.open("TRACE", action);
xhttp.send(body);
}

req.patch=(action,body)=>{
const xhttp = new XMLHttpRequest();
xhttp.onload = () => this.responseText;
xhttp.open("PATCH", action);
xhttp.send(body);
}
