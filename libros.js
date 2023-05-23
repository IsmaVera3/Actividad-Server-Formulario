const mongoose = require("mongoose");

const libroSchema = new mongoose.Schema({
    name: String,
    autor: String,
    editorial: String,
    isdn: Number,
    genero: String,
    paginas: Number,
    precio: Number,
    año: Number,
});

module.exports = mongoose.model("Libros", libroSchema);

