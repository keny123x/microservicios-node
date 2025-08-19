const http = require("http");

const PORT = 3001;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/usuarios" && req.method === "GET") {
    res.statusCode = 200;
    res.end(JSON.stringify([
      { id: 1, nombre: "Keny" },
      { id: 2, nombre: "Ana" }
    ]));
    return; // <--- IMPORTANTE: salir después de enviar la respuesta
  }

  // Si no coincide ninguna ruta
  res.statusCode = 404;
  res.end(JSON.stringify({ error: "Ruta no encontrada" }));
});

server.listen(PORT, () => {
  console.log(`Microservicio de Usuarios corriendo en http://localhost:${PORT}`);
});
