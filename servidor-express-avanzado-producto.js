const express = require("express");

const { controladoresApi } = require("./controllers/controladoresApi-producto.js");
// const { controladoresWeb } = require("./controllers/controladoresWeb.js");

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

// app.get("/", controladoresWeb.root);
// app.get("/inicio", controladoresWeb.inicio);
// app.get("/perfil",controladoresWeb.perfil);

app.get("/api/info", controladoresApi.getInfo);
app.get("/api/productos", controladoresApi.getProductos);
app.get("/api/productos/:idProducto", controladoresApi.getProducto);

app.post("/api/productos", controladoresApi.postProducto)

app.delete("/api/productos/:idProducto", controladoresApi.deleteProducto);

app.put("/api/productos/:idProducto", controladoresApi.putProducto);



const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${server.address().port}`);
})

// http://localhost:8080/api/personas?rol=profe