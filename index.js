const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Libros = require("./libros");
const port = 3000;

mongoose.connect(
    "mongodb+srv://isma:ismapiratavera...@cluster0.zcaiqkt.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const bodyParser = require("body-parser");
const { name } = require("ejs");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("mi-vista");
});

app.post("/", (req, res) => {
    const name = req.body.name;
    const autor = req.body.autor;
    const editorial = req.body.editorial;
    const isdn = req.body.isdn;
    const genero = req.body.genero;
    const paginas = req.body.paginas;
    const precio = req.body.precio;
    const año = req.body.año;

    const libros = new Libros({
        name: name,
        autor: autor,
        editorial: editorial,
        isdn: isdn,
        genero: genero,
        paginas: paginas,
        precio: precio,
        año: año,
    });

    libros.save();
    console.log(libros);
});

app.post("/", (req, res) => {
    const nameC = req.body.nameC;
    const autorC = req.body.autorC;
    const editorialC = req.body.editorialC;
    const isdnC = req.body.isdnC;
    const generoC = req.body.generoC;
    const paginasC = req.body.paginasC;
    const precioC = req.body.precioC;
    const añoC = req.body.añoC;
    
    const librosCargados = new mongoose.Schema({
        nameC: nameC,
        autorC: autorC,
        editorialC: editorialC,
        isdnC: isdnC,
        generoC: generoC,
        paginasC: paginasC,
        precioC: precioC,
        añoC: añoC,
    });
    
    const Ejemplo = mongoose.model("Ejemplo", librosCargados);
    
    
        librosCargados.save();
        console.log(librosCargados);
});

// Ruta para obtener los datos
app.get("/views/ver-libros", (req, res) => {
    librosCargados.find({}, (err, datos) => {
        if (err) {
            console.error("Error al obtener los datos:", err);
            res.status(500).json({ error: "Error al obtener los datos" });
        } else {
            res.json(datos);
        }
    });
});
librosCargados.save();
cosole.log(librosCargados);
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
