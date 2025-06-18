// npm i express ijs

const path = require("node:path")
const express = require("express")
const app = express()

process.loadEnvFile();
const PORT = process.env.PORT || 8888;


//middleware, entre  request y  response
app.use(express.static(path.join(__dirname, "public"))) // para que el programa vea los recursos en public, sino solo ve 404, lo demas es 404


app.get("/",(req,res)=>{
    res.send("todo ok")
})



app.use((req,res)=>{ /* else final, ruta desconocida*/
    res.status(404).sendFile(path.join(__dirname, "public", "404.html"))
}) 

app.listen(PORT, ()=>{
    console.log(`servidor iniciado en http://localhost:${PORT}`);
})
