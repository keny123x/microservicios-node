const http = require("http");

const PORT = 3002;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/productos" && req.method === "GET") {
    res.statusCode = 200;
    res.end(JSON.stringify([
      { id: 1, nombre: "Laptop" },
      { id: 2, nombre: "Celular" }
    ]));
    return; // importante: salir después de enviar la respuesta
  }

  // Si no coincide ninguna ruta
  res.statusCode = 404;
  res.end(JSON.stringify({ error: "Ruta no encontrada" }));
});

server.listen(PORT, () => {
  console.log(`Microservicio de Productos corriendo en http://localhost:${PORT}`);
});
