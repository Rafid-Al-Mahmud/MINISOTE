const app = require("./app")
const PORT = process.env.PORT || 3000;
const { hostname } = require("os");
const HOSTNAME = "localhost" || hostname || "192.168.0.104" || "127.0.0.1";

app.listen(PORT, ()=>{
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
})