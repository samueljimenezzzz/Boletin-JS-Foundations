// Ejercicio 1: Actualizando el Carrito (Spread + Inmutabilidad)

const estadoApp = {
  usuario: "Admin",
  carrito: [
    { id: 1, articulo: "Ratón", cantidad: 1 },
    { id: 2, articulo: "Teclado", cantidad: 1 }
  ],
  total: 50
};

const nuevoEstadoApp = {
  ...estadoApp,
  carrito: estadoApp.carrito.map((producto) =>
    producto.id === 2 ? { ...producto, cantidad: 2 } : producto
  ),
  total: 80
};

console.log("Estado original:", estadoApp);
console.log("Nuevo estado:", nuevoEstadoApp);
