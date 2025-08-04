const firebaseConfig = {
  apiKey: "AIzaSyA9vexJ7U2syDANbGslmksnnn2aBzQpfa0",
  authDomain: "turnerodepilacion.firebaseapp.com",
  databaseURL: "https://turnerodepilacion-default-rtdb.firebaseio.com",
  projectId: "turnerodepilacion",
  storageBucket: "turnerodepilacion.appspot.com",
  messagingSenderId: "409819957597",
  appId: "1:409819957597:web:846aa9d3c3d788c296c0b4"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const form = document.getElementById("formTurno");
const estado = document.getElementById("estadoTurno");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const nombre = document.getElementById("nombre").value.trim(); // nuevo campo
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;

  if (!nombre || !fecha || !hora) {
    estado.textContent = "⚠️ Por favor completá todos los campos.";
    return;
  }

  db.ref("turnos").push({
    nombre,
    fecha,
    hora,
    creado: new Date().toISOString()
  }).then(() => {
    estado.textContent = "✅ Turno registrado con éxito!!";
    form.reset();
  }).catch((error) => {
    estado.textContent = "❌ Error al guardar turno: " + error.message;
  });
});
