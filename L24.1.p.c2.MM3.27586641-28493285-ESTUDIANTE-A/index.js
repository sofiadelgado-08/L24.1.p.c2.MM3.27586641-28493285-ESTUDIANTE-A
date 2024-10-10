import Cl_estudiante from "./js/Cl_estudiante.js";
import Cl_becado from "./js/Cl_becado.js";

const estudiante = new Cl_estudiante();
const becado1 = new Cl_becado("Mary", 132, 8);
const becado2 = new Cl_becado("Alirio", 315, 35);

estudiante.procesarbecado(becado1);
estudiante.procesarbecado(becado2);

let salida = document.getElementById("salida");
salida.innerHTML =  `nombre del estudiante: ${becado1.nombre} }<br>
acumulado de notas ${becado1.notas}<br>
nota promedio ${becado1.promedionotas()}<br>
${becado1.nombre} recibe una beca de: ${becado1.beca()}`