/**
 * @fileoverview Infofetch - Sistema de infromacion inspirado en neofetch en NodeJs
 * @description Este script Muestra informacion detallada del sistema Y hardware
 * utilizando el modulo `OS` de Node.js
 * @author Carlos Andres Alzate
 * @license Creative Commons BY-NC 4.0.
 * @version 1.0.0
 * @requires node:os
 * @requires node:util
 */

// Modulos principales de Node.js
const os = require("node:os");
const { styleText } = require("node:util");

// ============================================================================
// OBTENCIÓN DE INFORMACIÓN DEL SISTEMA
// ============================================================================

// const eol = os.EOL; // Documentación*

/**
 * Numero de nucleos de CPU disponibles
 * @type {number}
 */
const availableParallelism = os.availableParallelism();

/**
 * Arquitectura del procesador (x64, arm64, etc)
 * @type {string}
 */
const arch = os.arch();

/**
 * Array con informacion detallada de cada nucleo de la CPU
 * @type {Array<Object>}
 */
const cpus = os.cpus();

/**
 * Dispositivo null del sistema (`/dev/null` en Unix, `NUL` en Windows)
 * @type {string}
 */
const devNull = os.devNull; // documentación*

/**
 * Endianness del sistema (BE para big-endian, LE para little-endian)
 * @type {string}
 */
const endianness = os.endianness();

/**
 * Memoria libre o disponible en bytes
 * @type {number}
 */
const freemem = os.freemem();

// const getPriority = os.getPriority();

/**
 * DIrectorio home al usuario actual
 * @type {string}
 */
const homedir = os.homedir();

/**
 * Nombre del host/hostname del sistema
 * @type {string}
 */
const hostname = os.hostname();

/**
 * Array con la carga promedio del sistema (1, 5, 15 minutos)
 * @type {Array<number>}
 */
const loadavg = os.loadavg(); // require mas conocimiento de uso para obtener un potencial

/**
 * Tipo de maquina/arquitectura del sistema
 * @type {string}
 */
const machine = os.machine();

/**
 * Interfaces de red disponibles en el sistema
 * @type {Object}
 */
const networkInterfaces = os.networkInterfaces();

/**
 * Plataforma del sistema operativo
 * @type {string}
 */
const platform = os.platform();

/**
 * Version/release del sistema operativo
 */
const release = os.release();

// const setPriority = os.setPriority();

/**
 * Directorio temporal del sistema
 * @type {string}
 */
const tmpdir = os.tmpdir();

/**
 * MEmoria total del sistema en bytes
 * @type {number}
 */
const totalmem = os.totalmem();

/**
 * Tipo de sistema operativo
 * @type {string}
 */
const type = os.type();

/**
 * Tiempo de actividad del sistema en segundos
 * @type {number}
 */
const uptime = os.uptime();

/**
 * Informacion del usuario actual
 * @type {Object}
 */
const userInfo = os.userInfo();

/**
 * Version completa del sistema operativo
 */
const version = os.version();

/**
 * Constantes del modulo `OS`
 * @type {Object}
 */
const constants = os.constants;

/**
 * Objeto con el tiempo de actividad procesado
 * @type {Object}
 */
const tiempo = tiempoActivo(uptime);

// ============================================================================
// CONFIGURACIÓN DE COLORES Y ESTILOS
// ============================================================================

/**
 * Cuadrados de colores para la paleta de colores del terminal
 * Este archivo está licenciado bajo Creative Commons BY-NC 4.0.
 */
const negro = styleText("black", "\u25A0");
const rojo = styleText("red", "\u25A0");
const verde = styleText("green", "\u25A0");
const amarillo = styleText("yellow", "\u25A0");
const azul = styleText("blue", "\u25A0");
const mangenta = styleText("magenta", "\u25A0");
const cyan = styleText("cyan", "\u25A0");
const white = styleText("white", "\u25A0");

/**
 * Textos estilazados para la informacion del sistema
 */
const informacion = styleText(
  ["black", "bgGreenBright", "bold"],
  " INFORMACIÓN ",
);
const setOs = styleText("greenBright", `${version} ${machine} ${platform}`);
const setKernel = styleText("greenBright", `${release}`);
const setUptime = styleText("greenBright", `${showTiempoActivo()}`);
const setCPU = styleText(
  "greenBright",
  `${cpus[0].model} (${availableParallelism})cores`,
);
const setMemory = styleText(
  "greenBright",
  `${totalmem - freemem} / ${totalmem} Bytes`,
);
const at = styleText("greenBright", "@");

/**
 * Paleta de colores completa para mostrar en el output
 * @type {string}
 */
const colors = `${negro} ${rojo} ${verde} ${amarillo} ${azul} ${mangenta} ${cyan} ${white}`;

// ============================================================================
// FUNCIONES UTILITARIAS
// ============================================================================

/**
 * Añade la letra 's' para puntializar palabras segun el numero
 * @param {*} numero - Numero a evaluar para la pluralizacion
 * @returns {string} Retorna  's' si el numero require plural, o una cadena
 * vacia si no
 * @example
 * addS(1); // ""
 * adds(2); // "s"
 * adds(0); // "s"
 */
function addS(numero) {
  if (numero < 1 || numero > 1) {
    return "s";
  }
}

/**
 *
 * @returns Genera una representacion legible del tiempo de actividad del sistema
 * @returns {string} Tiempo formateado como "X hora(s), Y minuto(s)"
 * @example
 * showTiempoActivo(); // "2 horas, 15 minutos"
 */
function showTiempoActivo() {
  return `${tiempo.hora} hora${addS(tiempo.hora)}, ${
    tiempo.minutos
  } minuto${addS(tiempo.minutos)}`;
}

/**
 * Convierte el uptime en segundos a un objeto con horas, minutos y segundos
 * @param {number} uptimeSeconds -Tiempo de actividad en segundos
 * @returns {object} Objeto con propiedades: hora, minutos, segundos
 * @property {string} hora - Horas como string
 * @property {string} minutos - minutos como string
 * @property {string} segundos - segundos como string
 * @example
 * tiempoActivo(7890); // { hora: "2", minutos: "11", segundos: "30" }
 */
function tiempoActivo(uptimeSeconds) {
  const hora = Math.floor(uptimeSeconds / 3600).toString();
  const minutos = Math.floor((uptimeSeconds % 3600) / 60).toString();
  const segundos = (uptimeSeconds % 60).toFixed(0);
  return { hora, minutos, segundos };
}

/**
 * Función comentada para convertir memoria total a unidades legibles
 * @deprecated Función no utilizada actualmente
 * @returns {Object} Objeto con gigabytes, megabytes y bytes restantes
 */
/* function memoriaTotal() {
  const gigabytes = Math.floor(totalmem / (1024 * 1024 * 1024));
  const megabytes = Math.floor(
    (totalmem % (1024 * 1024 * 1024)) / (1024 * 1024)
  );
  const bytesRestantes = totalmem % (1024 * 1024);
  return { gigabytes, megabytes, bytesRestantes };
} */

// ============================================================================
// SALIDA DEL PROGRAMA
// ============================================================================

/**
 * Template string con toda la informacion del sistema formateada
 * Incluye ASCII art e informacion del sistema
 * @type {string}
 */
const mostrarInformacion = `
================================================================================
|    ${informacion}
| 
|                             ${hostname}${at}${userInfo.username}
|   ,-~~-.___.             ------------------------------------
|  / |  '     \\             OS: ${setOs}
| (  )         0            Kernel: ${setKernel}
|  \\_/-, ,----'             Uptime: ${setUptime}
|     ====           //     CPU: ${setCPU}
|    /  \\-'~;    /~~~(O)    Memory: ${setMemory}
|   /  __/~|   /       |      
| =(  _____| (_________|      ${colors}
================================================================================
`;

// Mostrar la informacion del sistema
console.log(mostrarInformacion);

/**
 * Este archivo está licenciado bajo Creative Commons BY-NC 4.0.
 * Más información en https://creativecommons.org/licenses/by-nc/4.0/
 */
