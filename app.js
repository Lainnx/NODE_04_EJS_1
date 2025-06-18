// npm i express ijs

const path = require("node:path")
const express = require("express")
const app = express()

process.loadEnvFile();
const PORT = process.env.PORT || 8888;


//middleware, entre  request y  response,, ruta de los ficheros estaticos
app.use(express.static(path.join(__dirname, "public"))) // para que el programa vea los recursos en public, sino solo ve 404, lo demas es 404

//informar a express de cual es el motor de las plantillas(views) 
app.set("view engine", "ejs")
app.set("views", "./views")



app.get("/",(req,res)=>{
    res.send("todo ok")
})
//ruta para la plantilla, para envial info a plantilla se usa render(permite 1 o dos parametros)(ciew y objeto)
app.get("/alumnos",(req,res)=>{
    res.render("alumnos", {"h1":"Título enviado desde la ruta","title":"Alumnos EJS"})
})

app.get("/cursos",(req,res)=>{  /*injectamos el texto al declarar la ruta, la plantilla se encarga de mostrar la pagina igual cada vez solo cc cv */
    res.render("cursos", {"h1":"Cursos disponibles","title":"Cursos EJS"})
})


app.use((req,res)=>{ /* else final, ruta desconocida*/
    res.status(404).sendFile(path.join(__dirname, "public", "404.html"))
}) 

app.listen(PORT, ()=>{
    console.log(`servidor iniciado en http://localhost:${PORT}`);
})
